import * as AT from '../actionTypes';
import {
  getFirstDayOfCurrentWeek,
  getLastDayOfCurrentWeek,
} from '../../utils/dateHelpers';

const initialState = {
  startDate: getFirstDayOfCurrentWeek(),
  endDate: getLastDayOfCurrentWeek(),
};

const dates = (state = initialState, action) => {
  switch (action.type) {
    case AT.CHANGE_DATES: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default dates;
