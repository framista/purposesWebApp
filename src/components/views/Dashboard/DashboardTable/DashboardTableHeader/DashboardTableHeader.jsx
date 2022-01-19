import React from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import './DashboardTableHeader.scss';

const sortingArrow = (sortingColumn, sortingWay, column) => (
  <>
    {sortingColumn === column &&
      (sortingWay === 'asc' ? <FaSortUp /> : <FaSortDown />)}
  </>
);

const DashboardTableHeader = ({
  changeSortingForDashboard,
  sortingColumn,
  sortingWay,
}) => {
  return (
    <div className="dashboardTableHeader">
      <div
        className="dashboardTableHeader__cell"
        onClick={() => changeSortingForDashboard('taskName')}
      >
        <small className="secondary">Task</small>
        {sortingArrow(sortingColumn, sortingWay, 'taskName')}
      </div>
      <div
        className="dashboardTableHeader__cell dashboardTableHeader__categoryName"
        onClick={() => changeSortingForDashboard('categoryName')}
      >
        <small className="secondary">Category</small>
        {sortingArrow(sortingColumn, sortingWay, 'categoryName')}
      </div>
      <div
        className="dashboardTableHeader__cell"
        onClick={() => changeSortingForDashboard('points')}
      >
        <small className="secondary">Points</small>
        {sortingArrow(sortingColumn, sortingWay, 'points')}
      </div>
      <div
        className="dashboardTableHeader__cell"
        onClick={() => changeSortingForDashboard('date')}
      >
        <small className="secondary">Date</small>
        {sortingArrow(sortingColumn, sortingWay, 'date')}
      </div>
      <small className="secondary"></small>
    </div>
  );
};

export default React.memo(DashboardTableHeader);
