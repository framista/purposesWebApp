import { sortArrayByKey } from '../../../../utils/arrayHelpers';

export const getRelevantCategories = (
  allCategories,
  searchValue,
  sortingColumn,
  sortingWay
) => {
  const array = Object.values(allCategories).reduce((categories, category) => {
    const { name, description } = category;
    return name.toLowerCase().includes(searchValue.toLowerCase()) ||
      description.toLowerCase().includes(searchValue.toLowerCase())
      ? [...categories, category]
      : categories;
  }, []);
  return sortArrayByKey(array, sortingColumn, sortingWay === 'desc');
};
