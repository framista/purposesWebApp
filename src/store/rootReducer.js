import { combineReducers } from 'redux';

import currentUser from './currentUser/currentUser.reducer';

const rootReducer = combineReducers({
  currentUser,
});

export default rootReducer;
