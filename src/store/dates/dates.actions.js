import * as AT from '../actionTypes';

export const changeDates = (startDate, endDate) => ({
  type: AT.CHANGE_DATES,
  payload: { startDate, endDate },
});
