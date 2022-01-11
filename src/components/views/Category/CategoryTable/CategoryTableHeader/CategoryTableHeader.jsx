import React from 'react';

import './CategoryTableHeader.scss';

const CategoryTableHeader = () => {
  return (
    <div className="categoryTableHeader">
      <small className="secondary">Name</small>
      <small className="secondary categoryTableHeader__description">
        Description
      </small>
      <small className="secondary">Points</small>
      <small className="secondary">Current week</small>
      <small className="secondary"></small>
    </div>
  );
};

export default CategoryTableHeader;
