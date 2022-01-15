import { COLOR_PRIMARY } from '../../../../constants/color';

export const getInitialState = () => {
  return {
    taskName: '',
    category: {},
    color: COLOR_PRIMARY,
    points: 80,
    description: '',
    errors: {},
  };
};
