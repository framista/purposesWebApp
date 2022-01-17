import * as AT from '../actionTypes';

const initialState = {
  searchValue: '',
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case AT.CHANGE_SEARCH_VALUE_FOR_DASHBOARD: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    default:
      return state;
  }
};

export default tasks;
