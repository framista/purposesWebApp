import { COLOR_PRIMARY } from '../../../../constants/color';

export const getInitialState = () => {
  return {
    categoryName: '',
    color: COLOR_PRIMARY,
    points: 80,
    description: '',
    errors: {},
  };
};

export const getUpdatedState = (selectedCategory) => {
  return {
    categoryName: selectedCategory.name,
    color: selectedCategory.color,
    points: selectedCategory.points,
    description: selectedCategory.description,
    errors: {},
  };
};
