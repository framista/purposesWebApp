import axios from 'axios';
import * as EP from '../endpoints';
import * as AT from '../actionTypes';
import { logout } from '../../services/firebase';

export const createUser = async (name, id, email) => {
  try {
    await axios.post(`${EP.BASE_URL}${EP.CREATE_USER}`, {
      name,
      user_id: id,
      email,
    });
  } catch (err) {
    throw new Error(err);
  }
};

const loginSuccessfully = (name, id, email) => ({
  type: AT.LOGIN_SUCCESSFULLY,
  payload: { name, id, email },
});

export const loginUser = (user) => (dispatch) => {
  const { displayName, uid, email } = user;
  dispatch(loginSuccessfully(displayName, uid, email));
};

export const logoutUser = () => async (dispatch) => {
  await logout();
  dispatch({
    type: AT.LOGOUT_SUCCESSFULLY,
  });
};
