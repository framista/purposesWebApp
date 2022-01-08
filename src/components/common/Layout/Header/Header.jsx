import React, { useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { auth, logout } from '../../../../services/firebase';

import './Header.scss';

const Header = () => {
  const user = auth.currentUser;
  const location = useLocation();
  const navigate = useNavigate();

  const loginDestination = location.pathname === '/login' ? 'signup' : 'login';
  const logoDestination = user ? 'dashboard' : '';

  const handleLogOut = useCallback(async (e) => {
    e.preventDefault();
    await logout();
    navigate('/login');
  }, []);

  return (
    <div className="header">
      <div className="header__logo">
        <Link to={`/${logoDestination}`}>Purposes App</Link>
      </div>
      <div className="header__options">
        {user ? (
          <button
            className="outline header__logoutButton"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        ) : (
          <Link to={`/${loginDestination}`}>
            {loginDestination === 'login' ? 'Sing In' : 'Sign Up'}
          </Link>
        )}
      </div>
    </div>
  );
};

export default React.memo(Header);
