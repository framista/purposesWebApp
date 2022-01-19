import React from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';
import './CategoryTableHeader.scss';

const sortingArrow = (sortingColumn, sortingWay, column) => (
  <>
    {sortingColumn === column &&
      (sortingWay === 'asc' ? <FaSortUp /> : <FaSortDown />)}
  </>
);

const CategoryTableHeader = ({
  changeSortingForCategory,
  sortingColumn,
  sortingWay,
}) => {
  return (
    <div className="categoryTableHeader">
      <div
        className="categoryTableHeader__cell"
        onClick={() => changeSortingForCategory('name')}
      >
        <small className="secondary">Name</small>
        {sortingArrow(sortingColumn, sortingWay, 'name')}
      </div>
      <div
        className="categoryTableHeader__cell categoryTableHeader__description"
        onClick={() => changeSortingForCategory('description')}
      >
        <small className="secondary">Description</small>
        {sortingArrow(sortingColumn, sortingWay, 'description')}
      </div>
      <div
        className="categoryTableHeader__cell"
        onClick={() => changeSortingForCategory('points')}
      >
        <small className="secondary">Points</small>
        {sortingArrow(sortingColumn, sortingWay, 'points')}
      </div>
      <small className="secondary">Current week</small>
      <small className="secondary"></small>
    </div>
  );
};

export default React.memo(CategoryTableHeader);
