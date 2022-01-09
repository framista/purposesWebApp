import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import './Modal.scss';

const Modal = (props) => {
  const { isOpen, onClose, children, title, onSubmit, uiStateMode, loading } =
    props;

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      if (isOpen) onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal" data-theme={uiStateMode}>
      <dialog open="true" onClick={onClose}>
        <article
          className="modal__content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal__header">
            <p>{title}</p>
            <div className="modal__closeIcon" onClick={onClose}>
              <MdClose />
            </div>
          </div>
          {children}
          <div className="modal__footer">
            <button className="outline" onClick={onClose}>
              Cancel
            </button>
            <button onClick={onSubmit} aria-busy={loading ? 'true' : null}>
              Submit
            </button>
          </div>
        </article>
      </dialog>
    </div>,
    document.body
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  uiStateMode: PropTypes.string,
  loading: PropTypes.bool,
};

export default Modal;
