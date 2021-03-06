import { toast } from 'react-toastify';

import * as AT from '../actionTypes';
import { fetchActivities } from '../activities/activities.actions';
import {
  fetchCategories,
  selectAllCategorieries,
} from '../categories/categories.actions';
import { fetchStatistics } from '../statistics/statistics.actions';
import { fetchTasks } from '../tasks/tasks.actions';

export const getDashboardRouteData = () => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const promises = [];
    promises.push(dispatch(fetchCategories(currentUser.id)));
    promises.push(dispatch(fetchTasks(currentUser.id)));
    promises.push(dispatch(fetchActivities()));
    promises.push(dispatch(fetchStatistics()));
    await Promise.all(promises);
    dispatch(selectAllCategorieries());
    toast.success('Data fetched successfully');
  } catch (err) {
    toast.error('Problem with dashboard data fetching');
  }
};

export const changeSearchValueForDashboard = (searchText) => ({
  type: AT.CHANGE_SEARCH_VALUE_FOR_DASHBOARD,
  payload: searchText,
});

export const changeSortingForDashboard = (column) => (dispatch, getState) => {
  const { sortingColumn, sortingWay } = getState().dashboard;
  let [newSortingColumn, newSortingWay] = ['', ''];

  if (sortingColumn === column && sortingWay === 'asc') {
    newSortingWay = '';
    newSortingColumn = '';
  } else if (sortingColumn !== column) {
    newSortingColumn = column;
    newSortingWay = 'desc';
  } else {
    newSortingColumn = column;
    newSortingWay = 'asc';
  }

  dispatch({
    type: AT.CHANGING_SORTING_FOR_DASHBOARD,
    payload: { sortingColumn: newSortingColumn, sortingWay: newSortingWay },
  });
};
