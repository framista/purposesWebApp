import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_STATISTICS } from '../endpoints';
import { getDates } from '../../utils/dateHelpers';
import {
  formatCategoriesWithDatesOfActivity,
  formatCategoryPoints,
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
        data.datesForCategories,
        dates[0],
      ),
      pointsCategorySummary: formatCategoryPoints(
        allCategories,
        data.categorySummary,
        dates.length
      ),
    },
  });
};

export const fetchStatistics =
  (userId, startDate = '2022-01-17', endDate = '2022-01-23') =>
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
