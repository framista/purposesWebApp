import { COLOR_PRIMARY } from '../../../../constants/color';
import {
  formatDate,
  formatShortDateToHumanDate,
} from '../../../../utils/dateHelpers';

export const getCalendarDateObject = (startDate, endDate) => ({
  startDate: new Date(startDate),
  endDate: new Date(endDate),
  key: 'selection',
  color: COLOR_PRIMARY,
});

export const getDatesToDisplay = (startDate, endDate) => {
  const start = formatShortDateToHumanDate(formatDate(startDate));
  const end = formatShortDateToHumanDate(formatDate(endDate));
  return `${start} - ${end}`;
};
