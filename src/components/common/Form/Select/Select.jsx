import React from 'react';
import PropTypes from 'prop-types';

import FieldWrapper from '../FieldWrapper/FieldWrapper';
import { createEvent } from '../../../../utils/inputHelpers';

const Select = (props) => {
  const {
    errorMessage = '',
    id,
    name,
    placeholder = 'Select option...',
    labelText = '',
    value,
    onChange,
    options = [],
  } = props;
  return (
    <FieldWrapper elementId={id} errorMessage={errorMessage} text={labelText}>
      <select
        id={id}
        name={name || id}
        value={value.id}
        defaultValue={placeholder}
        onChange={(e) => {
          const option =
            options.find(({ _id }) => _id === e.target.value) || {};
          onChange(createEvent(id, option));
        }}
        aria-invalid={errorMessage ? 'true' : null}
      >
        <option value="default">{placeholder}</option>
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};

Select.propTypes = {
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.shape({ id: PropTypes.string, name: PropTypes.string }),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, name: PropTypes.string })
  ),
};

export default Select;
