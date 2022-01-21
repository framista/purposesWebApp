import { toast } from 'react-toastify';

import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_TASK } from '../endpoints';
import { fetchCategories } from '../categories/categories.actions';

const fetchTasksSuccessfully = (tasks) => ({
  type: AT.FETCH_TASKS_SUCCESSFULLY,
  payload: tasks,
});

export const fetchTasks = (userId) => async (dispatch) => {
  try {
    const result = await purposeApi(userId).get(URL_TASK);
    dispatch(fetchTasksSuccessfully(result.data));
  } catch (err) {
    toast.error('Problem with tasks fetching');
  }
};

export const getTaskRouteData = () => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const promises = [];
    promises.push(dispatch(fetchCategories(currentUser.id)));
    promises.push(dispatch(fetchTasks(currentUser.id)));
    await Promise.all(promises);
  } catch (err) {
    toast.error('Unexpected error');
  }
};

const createTaskSuccessfully = (task, id) => ({
  type: AT.CREATE_TASK_SUCCESSFULLY,
  payload: { ...task, id },
});

export const createTask = (task) => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const { taskName: name, category, ...restTask } = task;
    const newTask = { ...restTask, name, category_id: category._id };
    const result = await purposeApi(currentUser.id).post(URL_TASK, newTask);
    dispatch(createTaskSuccessfully(newTask, result.data.id));
    toast.success('Task was added successfully');
  } catch (err) {
    toast.error('Task was not added');
  }
};

export const changeSearchValueForTask = (searchText) => ({
  type: AT.CHANGE_SEARCH_VALUE_FOR_TASK,
  payload: searchText,
});

export const changeSortingForTask = (column) => (dispatch, getState) => {
  const { sortingColumn, sortingWay } = getState().tasks;
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
    type: AT.CHANGING_SORTING_FOR_TASK,
    payload: { sortingColumn: newSortingColumn, sortingWay: newSortingWay },
  });
};
