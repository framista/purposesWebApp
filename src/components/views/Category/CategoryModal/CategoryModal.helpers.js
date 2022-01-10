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
