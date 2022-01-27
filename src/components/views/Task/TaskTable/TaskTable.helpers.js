import { sortArrayByKey } from '../../../../utils/arrayHelpers';

export const getRelevantTasks = (
  allTasks,
  allCategories,
  searchValue,
  sortingColumn,
  sortingWay,
  selectedCategories
) => {
  const array = Object.values(allTasks).reduce((tasks, task) => {
    const { name, description, category_id } = task;
    const categoryName = allCategories[category_id]?.name || '';
    const searchValueLowerCase = searchValue.toLowerCase();
    return selectedCategories.includes(category_id) &&
      (name.toLowerCase().includes(searchValueLowerCase) ||
        categoryName.toLowerCase().includes(searchValueLowerCase) ||
        description.toLowerCase().includes(searchValueLowerCase))
      ? [...tasks, { ...task, categoryName }]
      : tasks;
  }, []);
  return sortArrayByKey(array, sortingColumn || 'name', sortingWay === 'desc');
};
