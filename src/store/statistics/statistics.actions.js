import * as AT from '../actionTypes';
import { purposeApi } from '../../services/purposeApi';
import { URL_STATISTICS } from '../endpoints';
import { getDates } from '../../utils/dateHelpers';

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

const fetchStatisticsSuccessfully = (data, dates) => ({
  type: AT.FETCH_STATISTICS_SUCCESSFULLY,
  payload: { dailyPoints: formatDailyPoints(data.dailyPoints, dates) },
});

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
