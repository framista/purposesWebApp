import { UI_STATE_MODE } from '../../constants/localStorage';
import * as AT from '../actionTypes';

export const setUiStateMode = (mode) => {
  localStorage.setItem(UI_STATE_MODE, mode);
  return { type: AT.SET_UI_STATE_MODE, payload: mode };
};

export const toogleUiStateMode = () => (dispatch, getState) => {
  const { uiState } = getState();
  const newMode = uiState.mode === 'dark' ? 'light' : 'dark';
  localStorage.setItem(UI_STATE_MODE, newMode);
  dispatch({ type: AT.TOOGLE_UI_STATE_MODE });
};

export const showModal = (modalType, modalProps = {}) => ({
  type: AT.SHOW_MODAL,
  payload: { modalType, modalProps },
});

export const hideModal = () => ({
  type: AT.HIDE_MODAL,
});

export const toggleSidebarOpen = () => ({
  type: AT.TOGGLE_SIDEBAR_OPEN,
});

export const setSidebarOpen = (isOpen) => ({
  type: AT.SET_SIDEBAR_OPEN,
  payload: isOpen,
});
