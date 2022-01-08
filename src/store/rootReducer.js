import { combineReducers } from 'redux';

import currentUser from './currentUser/currentUser.reducer';
import uiState from './uiState/uiState.reducer';

const rootReducer = combineReducers({
  currentUser,
  uiState,
});

export default rootReducer;
