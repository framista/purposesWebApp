const formatNumber = (number) => (number < 9 ? `0${number}` : number);

export const formatDate = (date) => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${year}-${formatNumber(month)}-${formatNumber(day)}`;
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
  const d = new Date();
  d.setUTCHours(12, 0, 0, 0);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1);
  return formatDate(new Date(d.setDate(diff)));
};

export const getLastDayOfCurrentWeek = () => {
  const date = new Date(getFirstDayOfCurrentWeek());
  date.setDate(date.getDate() + 6);
  return formatDate(date);
};

export const formatShortDateToHumanDate = (date) => {
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
};
