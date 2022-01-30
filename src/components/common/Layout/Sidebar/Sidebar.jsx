import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { sidebarOptions, widthForChanges } from './Sidebar.helpers';
import { useWindowSize } from '../../../../hooks';

import './Sidebar.scss';

const Sidebar = ({ logged, sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [width] = useWindowSize();

  useEffect(() => {
    const newIsOpen = width > widthForChanges;
    setSidebarOpen(newIsOpen);
  }, [width]);

  if (!logged) return null;

  if (!sidebarOpen) return null;

  return (
    <div className="sidebar">
      {sidebarOptions.map((option) => {
        const optionClassName = classnames('sidebar__option', {
          'sidebar__option--selected': location.pathname === option.destination,
        });
        return (
          <Link
            to={option.destination}
            className={optionClassName}
            key={option.id}
            onClick={() => {
              if (width < widthForChanges) setSidebarOpen(false);
            }}
          >
            <div className="sidebar__icon">{option.icon}</div>
            <div className="sidebar__name">{option.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

Sidebar.propTypes = {
  logged: PropTypes.bool,
  setSidebarOpen: PropTypes.func,
};

export default React.memo(Sidebar);
