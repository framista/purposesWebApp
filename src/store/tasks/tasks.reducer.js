import * as AT from '../actionTypes';

const initialState = {
  allTasks: {},
  searchValue: '',
  sortingColumn: '',
  sortingWay: '',
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case AT.CREATE_TASK_SUCCESSFULLY: {
      return {
        ...state,
        allTasks: {
          ...state.allTasks,
          [action.payload.id]: { ...action.payload },
        },
      };
    }
    case AT.FETCH_TASKS_SUCCESSFULLY: {
      return {
        ...state,
        allTasks: action.payload.reduce(
          (prev, task) => ({ ...prev, [task._id]: task }),
          {}
        ),
      };
    }
    case AT.CHANGE_SEARCH_VALUE_FOR_TASK: {
      return {
        ...state,
        searchValue: action.payload,
      };
    }
    case AT.CHANGING_SORTING_FOR_TASK: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default tasks;
