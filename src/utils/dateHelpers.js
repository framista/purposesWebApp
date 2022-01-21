export const formatDate = (date = new Date(), addDays = 0) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + addDays);
  return newDate.toISOString().slice(0, 10);
};

export const getDates = (startDate, endDate) => {
  let dates = [];
  const theDate = new Date(startDate);
  const endDateObj = new Date(endDate);
  while (theDate < endDateObj) {
    dates = [...dates, formatDate(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  dates = [...dates, endDate];
  return dates;
};

export const getStartOfDate = (date) => {
  const newDate = new Date(date);
  newDate.setUTCHours(0, 0, 0, 0);
  return newDate;
};

export const getEndOfDate = (date) => {
  const newDate = new Date(date);
  newDate.setUTCHours(23, 59, 59, 999);
  return newDate;
};

export const getFirstDayOfCurrentWeek = () => {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay();
  const firstday = new Date(curr.setDate(first)).toUTCString();
  return formatDate(firstday);
};

export const getLastDayOfCurrentWeek = () => {
  const curr = new Date();
  const first = curr.getDate() - curr.getDay();
  const last = first + 6;
  const lastday = new Date(curr.setDate(last)).toUTCString();
  return formatDate(lastday);
};

export const formatShortDateToHumanDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
};
