export const formatDate = (date) => new Date(date).toISOString().slice(0, 10);

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
