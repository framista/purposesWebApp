import React from 'react';
import PropTypes from 'prop-types';

import FieldWrapper from '../FieldWrapper/FieldWrapper';

const Input = (props) => {
  const {
    errorMessage = '',
    id,
    type = 'text',
    name,
    placeholder = '',
    labelText = '',
    value,
    onChange,
    autoFocus = false,
    ...restProps
  } = props;
  return (
    <FieldWrapper elementId={id} errorMessage={errorMessage} text={labelText}>
      <input
        type={type}
        id={id}
        name={name || id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={errorMessage ? 'true' : null}
        autoFocus={autoFocus}
        {...restProps}
      />
    </FieldWrapper>
  );
};

Input.propTypes = {
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default Input;
