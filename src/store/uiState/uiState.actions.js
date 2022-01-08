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