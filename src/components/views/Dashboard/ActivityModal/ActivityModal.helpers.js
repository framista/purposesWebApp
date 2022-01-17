export const getInitialState = () => {
  return {
    category: {},
    task: {},
    points: 80,
    date: new Date().toISOString().slice(0, 10),
    errors: {},
  };
};
