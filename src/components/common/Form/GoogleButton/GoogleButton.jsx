import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../';

import './GoogleButton.scss';

const GoogleButton = (props) => {
  const { loading, onClick } = props;
  return (
    <div className="googleButton">
      <Button disabled={loading} onClick={onClick}>
        <div className="googleButton__content">
          <div className="googleButton__icon">
            <FcGoogle />
          </div>
          <p className="googleButton__text">Sign in with Google</p>
        </div>
      </Button>
    </div>
  );
};

GoogleButton.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default GoogleButton;
