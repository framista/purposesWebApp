import './App.css';
import Header from './components/common/Layout/Header/Header';
import LoginPage from './components/views/LoginPage/LoginPage';
import SignUpPage from './components/views/SignUpPage/SignUpPage';


function App() {
  return (
    <>
      <Header />
      <LoginPage />
      {/* <SignUpPage /> */}
    </>
  );
}

export default App;
