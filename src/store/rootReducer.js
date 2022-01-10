import { combineReducers } from 'redux';

import currentUser from './currentUser/currentUser.reducer';
import uiState from './uiState/uiState.reducer';
import categories from './categories/categories.reducer';

const rootReducer = combineReducers({
  currentUser,
  uiState,
  categories,
});

export default rootReducer;
