import * as AT from '../actionTypes';

const initialState = {
  allCategories: {},
  searchValue: '',
  sortingColumn: '',
  sortingWay: '',
  selectedCategories: [],
  searchCategory: '',
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
    case AT.UPDATE_CATEGORY_SUCCESSFULLY: {
      return {
        ...state,
        allCategories: {
          ...state.allCategories,
          [action.payload._id]: action.payload,
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
    case AT.CHANGE_SEARCH_VALUE_FOR_CATEGORY: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case AT.CHANGING_SORTING_FOR_CATEGORY: {
      return { ...state, ...action.payload };
    }
    case AT.SET_SELECTED_CATEGORIES: {
      return { ...state, selectedCategories: action.payload };
    }
    case AT.SET_SEARCH_CATEGORY: {
      return { ...state, searchCategory: action.payload };
    }
    default:
      return state;
  }
};

export default categories;
