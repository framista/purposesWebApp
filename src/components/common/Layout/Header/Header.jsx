import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';

import { logout } from '../../../../services/firebase';

import './Header.scss';

const Header = ({ logged, toogleUiStateMode, uiStateMode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const loginDestination = location.pathname === '/login' ? 'signup' : 'login';
  const logoDestination = logged ? 'dashboard' : '';

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
        <div onClick={toogleUiStateMode} className="header__mode">
          {uiStateMode === 'dark' ? <MdWbSunny /> : <MdDarkMode />}
        </div>
        {logged ? (
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

Header.propTypes = {
  toogleUiStateMode: PropTypes.func,
  logged: PropTypes.bool,
  uiStateMode: PropTypes.string,
};

export default React.memo(Header);
