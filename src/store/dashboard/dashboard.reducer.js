import * as AT from '../actionTypes';

const initialState = {
  searchValue: '',
  sortingColumn: '',
  sortingWay: '',
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case AT.CHANGE_SEARCH_VALUE_FOR_DASHBOARD: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case AT.CHANGING_SORTING_FOR_DASHBOARD: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default tasks;
