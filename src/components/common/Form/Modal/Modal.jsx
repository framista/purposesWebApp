import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

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
          className="modal__article"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <OverlayScrollbarsComponent className="modal__scrollbar">
            <div className="modal__content">
              <div className="modal__header">
                <h6 className="modal__title">{title}</h6>
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
            </div>
          </OverlayScrollbarsComponent>
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
