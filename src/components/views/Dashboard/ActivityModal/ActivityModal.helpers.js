import { formatDate } from '../../../../utils/dateHelpers';

export const getInitialState = () => {
  return {
    category: {},
    task: {},
    points: 80,
    date: formatDate(new Date()),
    errors: {},
  };
};

export const getUpdatedState = (
  selectedActivity,
  selectedCategory,
  selectedTask
) => {
  return {
    _id: selectedActivity._id,
    category: selectedCategory,
    task: selectedTask,
    points: selectedActivity.points,
    date: formatDate(selectedActivity.date),
    errors: {},
  };
};
