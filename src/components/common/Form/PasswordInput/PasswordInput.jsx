import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import FieldWrapper from '../FieldWrapper/FieldWrapper';

import './PasswordInput.scss';

const PasswordInput = (props) => {
  const {
    errorMessage = '',
    id,
    name,
    placeholder = '',
    labelText = '',
    value,
    onChange,
  } = props;
  const [passwordType, setPasswordType] = useState('password');

  const newPasswordType = passwordType === 'password' ? 'text' : 'password';

  return (
    <div className="passwordInput">
      <FieldWrapper elementId={id} errorMessage={errorMessage} text={labelText}>
        <div className="passwordInput__content">
          <input
            type={passwordType}
            id={id}
            name={name || id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={errorMessage ? 'true' : null}
            aria-label="Password"
            autoComplete="current-password"
            className="passwordInput__input"
          />
          <div
            onClick={() => setPasswordType(newPasswordType)}
            className="passwordInput__icon"
          >
            {passwordType === 'password' ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
      </FieldWrapper>
    </div>
  );
};

PasswordInput.propTypes = {
  errorMessage: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string]),
  onChange: PropTypes.func,
};

export default PasswordInput;
