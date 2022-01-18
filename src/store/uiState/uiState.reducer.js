import * as AT from '../actionTypes';

const initialState = {
  mode: 'dark',
  modalType: '',
  modalProps: {},
  sidebarOpen: false,
};

const uiState = (state = initialState, action) => {
  switch (action.type) {
    case AT.TOOGLE_UI_STATE_MODE: {
      return { ...state, mode: state.mode === 'dark' ? 'light' : 'dark' };
    }
    case AT.SET_UI_STATE_MODE: {
      return { ...state, mode: action.payload };
    }
    case AT.SHOW_MODAL: {
      return { ...state, ...action.payload };
    }
    case AT.HIDE_MODAL: {
      return { ...state, modalType: '', modalProps: {} };
    }
    case AT.TOGGLE_SIDEBAR_OPEN: {
      return { ...state, sidebarOpen: !state.sidebarOpen };
    }
    case AT.SET_SIDEBAR_OPEN: {
      return { ...state, sidebarOpen: action.payload };
    }
    default:
      return state;
  }
};

export default uiState;
