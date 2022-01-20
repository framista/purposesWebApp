import { getEndOfDate, getStartOfDate } from '../../utils/dateHelpers';

export const formatDailyPoints = (dailyPoints, dates) => {
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
  _id: category._id,
});

export const formatCategoriesWithDatesOfActivity = (
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
      _id: category._id,
    })) || [getEmptyCategoryData(category)];
    return [...allData, ...dataForCategories];
  }, []);
};
