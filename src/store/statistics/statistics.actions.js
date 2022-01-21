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
        dates[0]
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
  (startDate, endDate) => async (dispatch, getState) => {
    const { currentUser, dates } = getState();
    const start = startDate || dates.startDate;
    const end = endDate || dates.endDate;
    const datesArray = getDates(start, end);
    const result = await purposeApi(currentUser.id).get(URL_STATISTICS, {
      params: { startDate: start, endDate: end },
    });
    dispatch(fetchStatisticsSuccessfully(result.data, datesArray));
  };
