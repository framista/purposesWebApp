import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { sidebarOptions } from './Sidebar.helpers';

import './Sidebar.scss';

const Sidebar = ({ logged }) => {
  const location = useLocation();
  if (!logged) return null;

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
          >
            <div className="sidebar__icon">{option.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

Sidebar.propTypes = {
  logged: PropTypes.bool,
};

export default React.memo(Sidebar);
