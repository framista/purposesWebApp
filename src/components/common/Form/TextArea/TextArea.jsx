import React from 'react';
import PropTypes from 'prop-types';

import FieldWrapper from '../FieldWrapper/FieldWrapper';

const TextArea = (props) => {
  const {
    errorMessage = '',
    id,
    name,
    placeholder = '',
    labelText = '',
    value,
    onChange,
  } = props;
  return (
    <FieldWrapper elementId={id} errorMessage={errorMessage} text={labelText}>
      <textarea
        id={id}
        name={name || id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={errorMessage ? 'true' : null}
        style={{ resize: 'none' }}
      />
    </FieldWrapper>
  );
};

TextArea.propTypes = {
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string]),
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

export default TextArea;
