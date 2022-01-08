import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../../../services/firebase';

import './Auth.scss';

const Auth = ({ logged, loginUser }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(async () => {
    const handleLoginUser = async () => {
      if (user && !logged) {
        await loginUser(user);
      }
      if (user && logged) {
        navigate('/dashboard');
      }
    };
    handleLoginUser();
  }, [user, logged]);

  if (user || loading) {
    return (
      <div className="auth">
        <progress indeterminate="true"></progress>
      </div>
    );
  }

  return <Navigate to="/about" />;
};

Auth.propTypes = {
  logged: PropTypes.bool,
  loginUser: PropTypes.func,
};

export default Auth;
