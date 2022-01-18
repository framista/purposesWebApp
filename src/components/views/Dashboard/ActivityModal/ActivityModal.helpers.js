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
