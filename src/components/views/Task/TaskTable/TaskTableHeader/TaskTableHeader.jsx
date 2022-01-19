import React from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import './TaskTableHeader.scss';

const sortingArrow = (sortingColumn, sortingWay, column) => (
  <>
    {sortingColumn === column &&
      (sortingWay === 'asc' ? <FaSortUp /> : <FaSortDown />)}
  </>
);

const TaskTableHeader = ({
  changeSortingForTask,
  sortingColumn,
  sortingWay,
}) => {
  return (
    <div className="taskTableHeader">
      <div
        className="taskTableHeader__cell"
        onClick={() => changeSortingForTask('name')}
      >
        <small className="secondary">Name</small>
        {sortingArrow(sortingColumn, sortingWay, 'name')}
      </div>
      <div
        className="taskTableHeader__cell taskTableHeader__description"
        onClick={() => changeSortingForTask('description')}
      >
        <small className="secondary">Description</small>
        {sortingArrow(sortingColumn, sortingWay, 'description')}
      </div>
      <div
        className="taskTableHeader__cell"
        onClick={() => changeSortingForTask('points')}
      >
        <small className="secondary">Points</small>
        {sortingArrow(sortingColumn, sortingWay, 'points')}
      </div>
      <div
        className="taskTableHeader__cell"
        onClick={() => changeSortingForTask('categoryName')}
      >
        <small className="secondary">Category</small>
        {sortingArrow(sortingColumn, sortingWay, 'categoryName')}
      </div>
      <small className="secondary"></small>
    </div>
  );
};

export default React.memo(TaskTableHeader);
