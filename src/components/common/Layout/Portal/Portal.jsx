import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const Portal = ({ children, elementId }) => {
  const mount = document.getElementById(elementId);
  const el = document.createElement('div');

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

Portal.propTypes = {
  children: PropTypes.node,
  elementId: PropTypes.string,
};

export default Portal;
