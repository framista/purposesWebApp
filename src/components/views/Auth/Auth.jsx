import React from 'react';
import { Navigate } from 'react-router-dom';

import { auth } from '../../../services/firebase';

import './Auth.scss';

const Auth = () => {
  const user = auth.currentUser;

  if (user) {
    // fetch user data
    return (
      <div className="auth">
        <progress indeterminate={true}></progress>
      </div>
    );
  }

  return <Navigate to="/about" />;
};

export default Auth;
