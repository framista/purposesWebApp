export const sortArrayByKey = (array = [], key = '', desc = 'true') => {
  if (!desc) {
    return array.sort((a, b) =>
      a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0
    );
  }
  return array.sort((a, b) => (a[key] > b[key] ? -1 : b[key] > a[key] ? 1 : 0));
};

export const toggleElement = (array, elementId) => {
  if (array.includes(elementId)) return array.filter((id) => id !== elementId);
  return [...array, elementId];
};
