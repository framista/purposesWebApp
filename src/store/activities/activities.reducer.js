import * as AT from '../actionTypes';
import { formatDate } from '../../utils/dateHelpers';

const initialState = {
  allActivities: {},
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case AT.CREATE_ACTIVITY_SUCCESSFULLY: {
      return {
        ...state,
        allActivities: {
          ...state.allActivities,
          [action.payload.id]: { ...action.payload },
        },
      };
    }
    case AT.FETCH_ACTIVITIES_SUCCESSFULLY: {
      return {
        ...state,
        allActivities: action.payload.reduce(
          (prev, activity) => ({
            ...prev,
            [activity._id]: { ...activity, date: formatDate(activity.date) },
          }),
          {}
        ),
      };
    }
    default:
      return state;
  }
};

export default tasks;
