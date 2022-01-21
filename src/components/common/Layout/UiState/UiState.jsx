import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import { UI_STATE_MODE } from '../../../../constants/localStorage';

import 'react-toastify/dist/ReactToastify.css';
import './UiState.scss';

const UiState = ({ children, uiStateMode, setUiStateMode }) => {
  useEffect(() => {
    const mode = localStorage.getItem(UI_STATE_MODE) || 'dark';
    setUiStateMode(mode);
  }, []);

  return (
    <div data-theme={uiStateMode} className="uiState">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={uiStateMode}
      />
      {children}
    </div>
  );
};

UiState.propTypes = {
  children: PropTypes.node,
  uiStateMode: PropTypes.bool,
};

export default React.memo(UiState);
