import { initializeApp } from 'firebase/app';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSZ4uu7O3RjHwIsINiDr3zdtRyt8Uic0Y',
  authDomain: 'purpose-5245a.firebaseapp.com',
  projectId: 'purpose-5245a',
  storageBucket: 'purpose-5245a.appspot.com',
  messagingSenderId: '681180713826',
  appId: '1:681180713826:web:a00513b5e1f6ebe8ae923b',
  measurementId: 'G-HJPBRXQD63',
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const provider = new GoogleAuthProvider();

const addUser = async (uid, name, email) => {
  await addDoc(collection(db, 'users'), {
    uid,
    name,
    email,
  });
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, provider);
    const querySnapshot = await getDocs(collection(db, 'users'));
    let isNewUser = true;
    querySnapshot.forEach((doc) => {
      const { uid } = doc.data();
      if (uid === res.user.uid) isNewUser = false;
    });
    if (isNewUser) {
      const { uid, displayName, email } = res.user;
      await addUser(uid, displayName, email);
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await addUser(res.user.uid, name, email);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = async () => {
  try {
    await signOut();
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  db,
  signInWithGoogle,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
