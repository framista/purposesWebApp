import * as AT from '../actionTypes';
import { fetchActivities } from '../activities/activities.actions';
import { fetchCategories } from '../categories/categories.actions';
import { fetchTasks } from '../tasks/tasks.actions';

export const getDashboardRouteData = () => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const promises = [];
    promises.push(dispatch(fetchCategories(currentUser.id)));
    promises.push(dispatch(fetchTasks(currentUser.id)));
    promises.push(dispatch(fetchActivities(currentUser.id)));
    await Promise.all(promises);
  } catch (err) {
    console.log(err);
  }
};

export const changeSearchValueForDashboard = (searchText) => ({
  type: AT.CHANGE_SEARCH_VALUE_FOR_DASHBOARD,
  payload: searchText,
});
