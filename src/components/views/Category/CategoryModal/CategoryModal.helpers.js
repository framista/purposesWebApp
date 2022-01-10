import { COLOR_PRIMARY } from '../../../../constants/color';

export const getInitialState = () => {
  return {
    name: '',
    color: COLOR_PRIMARY,
    points: 80,
    description: '',
    errors: {},
  };
};
