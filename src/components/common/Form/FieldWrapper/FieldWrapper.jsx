import React from 'react';
import PropTypes from 'prop-types';

const FieldWrapper = (props) => {
  const { children, text, elementId, errorMessage } = props;
  return (
    <div>
      <label htmlFor={elementId}>
        {text}
        {children}
        <small>{errorMessage}</small>
      </label>
    </div>
  );
};

FieldWrapper.propTypes = {
  children: PropTypes.node,
  text: PropTypes.oneOfType([PropTypes.string]),
  elementId: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default FieldWrapper;
