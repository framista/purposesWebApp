import { toast } from 'react-toastify';

import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_ACTIVITIES } from '../endpoints';
import { fetchStatistics } from '../statistics/statistics.actions';

const fetchActivitiesSuccessfully = (activities) => ({
  type: AT.FETCH_ACTIVITIES_SUCCESSFULLY,
  payload: activities,
});

export const fetchActivities =
  (startDate, endDate) => async (dispatch, getState) => {
    const { dates, currentUser } = getState();
    const result = await purposeApi(currentUser.id).get(URL_ACTIVITIES, {
      params: {
        startDate: startDate || dates.startDate,
        endDate: endDate || dates.endDate,
      },
    });
    dispatch(fetchActivitiesSuccessfully(result.data));
  };

const createActivitySuccessfully = (activity, id) => ({
  type: AT.CREATE_ACTIVITY_SUCCESSFULLY,
  payload: { ...activity, id },
});

export const createActivity = (activity) => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const { task, category, ...restActivity } = activity;
    const newActivity = {
      ...restActivity,
      task_id: task._id,
      category_id: category._id,
    };
    const result = await purposeApi(currentUser.id).post(
      URL_ACTIVITIES,
      newActivity
    );
    dispatch(createActivitySuccessfully(newActivity, result.data.id));
    toast.success('Activity was added successfully');
    Promise.all([dispatch(fetchActivities()), dispatch(fetchStatistics())]);
  } catch (err) {
    toast.error('Activity was not added');
  }
};

const updateActivitySuccessfully = (activity) => ({
  type: AT.UPDATE_ACTIVITY_SUCCESSFULLY,
  payload: activity,
});

export const updateActivity = (activity) => async (dispatch, getState) => {
  const { currentUser } = getState();
  try {
    const { task, category, ...restActivity } = activity;
    const updatedActivity = {
      ...restActivity,
      task_id: task._id,
      category_id: category._id,
    };
    await purposeApi(currentUser.id).put(
      `${URL_ACTIVITIES}/${activity._id}`,
      updatedActivity
    );
    dispatch(updateActivitySuccessfully(updatedActivity));
    toast.success('Activity was updated successfully');
  } catch (err) {
    toast.error('Activity was not updated');
  }
};
