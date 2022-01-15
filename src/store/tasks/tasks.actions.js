import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_TASK } from '../endpoints';
import { fetchCategories } from '../categories/categories.actions';

const fetchTasksSuccessfully = (tasks) => ({
  type: AT.FETCH_TASKS_SUCCESSFULLY,
  payload: tasks,
});

const fetchTasks = (userId) => async (dispatch) => {
  try {
    const result = await purposeApi(userId).get(URL_TASK);
    dispatch(fetchTasksSuccessfully(result.data));
  } catch (err) {
    console.log(err);
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
    console.log(err);
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
  } catch (err) {
    console.log(err);
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
    type: AT.CHANGING_SORTING_FOR_CATEGORY,
    payload: { sortingColumn: newSortingColumn, sortingWay: newSortingWay },
  });
};
