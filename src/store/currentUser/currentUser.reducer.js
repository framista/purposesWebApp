import * as AT from '../actionTypes';

const initialState = {
  email: '',
  name: '',
  user_id: '',
  logged: false,
};

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case AT.LOGIN_SUCCESSFULLY: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default currentUser;
