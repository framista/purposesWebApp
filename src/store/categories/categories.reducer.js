import * as AT from '../actionTypes';

const initialState = {
  allCategories: {},
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case AT.CREATE_CATEGORY_SUCCESSFULLY: {
      return {
        ...state,
        allCategories: {
          ...state.allCategories,
          [action.payload.id]: { ...action.payload },
        },
      };
    }
    default:
      return state;
  }
};

export default categories;
