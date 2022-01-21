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
    try {
      const { dates, currentUser } = getState();
      const result = await purposeApi(currentUser.id).get(URL_ACTIVITIES, {
        params: {
          startDate: startDate || dates.startDate,
          endDate: endDate || dates.endDate,
        },
      });
      dispatch(fetchActivitiesSuccessfully(result.data));
    } catch (err) {
      console.log(err);
    }
  };

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
    const result = await purposeApi(currentUser.id).post(
      URL_ACTIVITIES,
      newActivity
    );
    dispatch(createActivitySuccessfully(newActivity, result.data.id));
    Promise.all([dispatch(fetchActivities()), dispatch(fetchStatistics())]);
  } catch (err) {
    console.log(err);
  }
};
