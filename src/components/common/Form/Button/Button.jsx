import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { onClick, disabled = false, loading = false, children } = props;

  const handleClick = (e) => {
    e.preventDefault();
    if (disabled || loading) return;
    onClick();
  };

  return (
    <button onClick={handleClick} aria-busy={loading} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
