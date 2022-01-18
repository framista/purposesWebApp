import { sortArrayByKey } from '../../../../utils/arrayHelpers';

export const getRelevantActivities = (
  allTasks,
  allCategories,
  allActivities,
  searchValue,
  sortingColumn,
  sortingWay,
  selectedCategories
) => {
  const array = Object.values(allActivities).reduce((activities, activity) => {
    const { date, category_id, task_id } = activity;
    const categoryName = allCategories[category_id]?.name || '';
    const taskName = allTasks[task_id]?.name || '';
    const searchValueLowerCase = searchValue.toLowerCase();
    return selectedCategories.includes(category_id) &&
      (categoryName.toLowerCase().includes(searchValueLowerCase) ||
        taskName.toLowerCase().includes(searchValueLowerCase) ||
        date.includes(searchValueLowerCase))
      ? [...activities, { ...activity, categoryName, taskName }]
      : activities;
  }, []);
  return sortArrayByKey(array, sortingColumn, sortingWay === 'desc');
};
