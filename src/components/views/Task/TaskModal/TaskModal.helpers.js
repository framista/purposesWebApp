export const getInitialState = () => {
  return {
    taskName: '',
    category: {},
    points: 80,
    description: '',
    errors: {},
  };
};

export const getUpdatedState = (selectedTask, selectedCategory) => {
  return {
    taskName: selectedTask.name,
    category: selectedCategory,
    points: selectedTask.points,
    description: selectedTask.description,
    _id: selectedTask._id,
    errors: {},
  };
};
