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
    case AT.FETCH_CATEGORIES_SUCCESSFULLY: {
      return {
        ...state,
        allCategories: action.payload.reduce(
          (prev, category) => ({ ...prev, [category._id]: category }),
          {}
        ),
      };
    }
    default:
      return state;
  }
};

export default categories;
