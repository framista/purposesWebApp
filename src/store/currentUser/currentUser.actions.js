import axios from 'axios';
import * as EP from '../endpoints';
import * as AT from '../actionTypes';

export const createUser = async (name, id, email) => {
  try {
    await axios.post(`${EP.BASE_URL}${EP.CREATE_USER}`, {
      name,
      id,
      email,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const loginSuccessfully = (name, id, email) => ({
  type: AT.LOGIN_SUCCESSFULLY,
  payload: { name, id, email },
});
