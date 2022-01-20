import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_STATISTICS } from '../endpoints';
import { getDates } from '../../utils/dateHelpers';
import {
  formatCategoriesWithDatesOfActivity,
  formatDailyPoints,
} from './statistics.helpers';

const fetchStatisticsSuccessfully = (data, dates) => (dispatch, getState) => {
  const { categories } = getState();
  const { allCategories } = categories;
  dispatch({
    type: AT.FETCH_STATISTICS_SUCCESSFULLY,
    payload: {
      dailyPoints: formatDailyPoints(data.dailyPoints, dates),
      datesForCategories: formatCategoriesWithDatesOfActivity(
        allCategories,
        data.datesForCategories
      ),
    },
  });
};

export const fetchStatistics =
  (userId, startDate = '2022-01-14', endDate = '2022-01-28') =>
  async (dispatch) => {
    try {
      const dates = getDates(startDate, endDate);
      const result = await purposeApi(userId).get(URL_STATISTICS, {
        params: { startDate, endDate },
      });
      dispatch(fetchStatisticsSuccessfully(result.data, dates));
    } catch (err) {
      console.log(err);
    }
  };
