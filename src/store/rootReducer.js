import { combineReducers } from 'redux';

import currentUser from './currentUser/currentUser.reducer';
import uiState from './uiState/uiState.reducer';
import categories from './categories/categories.reducer';
import tasks from './tasks/tasks.reducer';
import dashboard from './dashboard/dashboard.reducer';
import activities from './activities/activities.reducer';

const rootReducer = combineReducers({
  categories,
  currentUser,
  uiState,
  tasks,
  dashboard,
  activities,
});

export default rootReducer;
