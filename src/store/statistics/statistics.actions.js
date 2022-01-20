import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_STATISTICS } from '../endpoints';
import {
  getDates,
  getEndOfDate,
  getStartOfDate,
} from '../../utils/dateHelpers';

const formatDailyPoints = (dailyPoints, dates) => {
  const dataObject = dailyPoints.reduce(
    (obj, dailyData) => ({
      ...obj,
      [dailyData._id]: dailyData.totalDailyPoints,
    }),
    {}
  );
  return dates.map((date) => dataObject[date] || 0);
};

const getEmptyCategoryData = (category) => ({
  x: category.name,
  y: [],
  fillColor: category.color,
  strokeColor: 'none',
});

const formatCategoriesWithDatesOfActivity = (
  allCategories,
  datesForCategories
) => {
  const dataObj = datesForCategories.reduce(
    (prev, data) => ({
      ...prev,
      [data._id]: data.dates,
    }),
    {}
  );
  return Object.values(allCategories).reduce((allData, category) => {
    const dataForCategories = dataObj[category._id]?.map((date) => ({
      x: category.name,
      y: [getStartOfDate(date).getTime(), getEndOfDate(date).getTime()],
      fillColor: category.color,
      strokeColor: 'none',
    })) || [getEmptyCategoryData(category)];
    return [...allData, ...dataForCategories];
  }, []);
};

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
