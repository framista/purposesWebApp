import * as AT from '../actionTypes';

const initialState = {
  dailyPoints: [],
  categorySummary: [],
  datesForCategories: [],
};

const statistics = (state = initialState, action) => {
  switch (action.type) {
    case AT.FETCH_STATISTICS_SUCCESSFULLY: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default statistics;
