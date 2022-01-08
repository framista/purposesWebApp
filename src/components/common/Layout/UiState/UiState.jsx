import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { UI_STATE_MODE } from '../../../../constants/localStorage';

import './UiState.scss';

const UiState = ({ children, uiStateMode, setUiStateMode }) => {
  useEffect(() => {
    const mode = localStorage.getItem(UI_STATE_MODE) || 'dark';
    setUiStateMode(mode);
  }, []);

  return (
    <div data-theme={uiStateMode} className="uiState">
      {children}
    </div>
  );
};

UiState.propTypes = {
  children: PropTypes.node,
  uiStateMode: PropTypes.bool,
};

export default React.memo(UiState);
