import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_ACTIVITIES } from '../endpoints';

const createActivitySuccessfully = (activity, id) => ({
  type: AT.CREATE_ACTIVITY_SUCCESSFULLY,
  payload: { ...activity, id },
});

export const createActivity = (activity) => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const { task, category, ...restTask } = activity;
    const newActivity = {
      ...restTask,
      task_id: task._id,
      category_id: category._id,
    };
    const result = await purposeApi(currentUser.id).post(URL_ACTIVITIES, newActivity);
    dispatch(createActivitySuccessfully(newActivity, result.data.id));
  } catch (err) {
    console.log(err);
  }
};
