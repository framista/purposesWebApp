import * as AT from '../actionTypes';

const initialState = {
  mode: 'dark',
};

const uiState = (state = initialState, action) => {
  switch (action.type) {
    case AT.TOOGLE_UI_STATE_MODE: {
      return { ...state, mode: state.mode === 'dark' ? 'light' : 'dark' };
    }
    case AT.SET_UI_STATE_MODE: {
      return { ...state, mode: action.payload };
    }
    default:
      return state;
  }
};

export default uiState;
