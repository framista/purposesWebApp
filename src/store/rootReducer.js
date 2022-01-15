import { combineReducers } from 'redux';

import currentUser from './currentUser/currentUser.reducer';
import uiState from './uiState/uiState.reducer';
import categories from './categories/categories.reducer';
import tasks from './tasks/tasks.reducer';

const rootReducer = combineReducers({
  categories,
  currentUser,
  uiState,
  tasks,
});

export default rootReducer;
