import React from 'react';
import PropTypes from 'prop-types';

import DashboardTableRowOptionsMenu from '../DashboardTableRowOptionsMenu/DashboardTableRowOptionsMenu.redux';

import './DashboardTableRow.scss';

const DashboardTableRow = (props) => {
  const { activity, category, task } = props;
  const { date, points, _id } = activity;

  return (
    <div className="dashboardTableRow">
      <p className="dashboardTableRow__taskName">{task.name}</p>
      <div className="dashboardTableRow__categoryColumn">
        <span
          className="dashboardTableRow__dot"
          style={{ background: category.color }}
        />
        <p className="dashboardTableRow__categoryName">{category.name}</p>
      </div>
      <p className="dashboardTableRow__points">{points}</p>
      <p className="dashboardTableRow__date">{date}</p>
      <DashboardTableRowOptionsMenu _id={_id} />
    </div>
  );
};

DashboardTableRow.propTypes = {
  activity: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    points: PropTypes.number,
    color: PropTypes.string,
  }),
};

export default React.memo(DashboardTableRow);
