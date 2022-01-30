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
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={uiStateMode}
        limit={3}
      />
      {children}
    </div>
  );
};

UiState.propTypes = {
  children: PropTypes.node,
  uiStateMode: PropTypes.string,
};

export default React.memo(UiState);
