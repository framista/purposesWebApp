export const shorterString = (text, defaultLength = 55) => {
  if (text.length <= defaultLength) return text;
  return `${text.slice(0, defaultLength)}...`;
};
