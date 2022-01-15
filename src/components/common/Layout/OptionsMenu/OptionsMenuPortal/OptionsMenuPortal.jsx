import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const OptionsMenuPortal = ({ children }) => {
  const mount = document.getElementById('menuOption-root');
  const el = document.createElement('div');

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

OptionsMenuPortal.propTypes = {
  children: PropTypes.node,
};

export default OptionsMenuPortal;
