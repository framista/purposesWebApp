import React from 'react';
import CategoryTableRowOptionsMenu from '../CategoryTableRowOptionsMenu/CategoryTableRowOptionsMenu';

import './CategoryTableRow.scss';

const CategoryTableRow = (props) => {
  const { category } = props;
  const { name, description, points, color } = category;
  return (
    <div className="categoryTableRow">
      <div className="categoryTableRow__nameColumn">
        <span className="categoryTableRow__dot" style={{ background: color }} />
        <p className="categoryTableRow__name">{name}</p>
      </div>
      <p className="categoryTableRow__description">{description}</p>
      <p className="categoryTableRow__points">{points}</p>
      <div>
        <div className="categoryTableRow__progress" data-tooltip="70%">
          <div style={{ width: '70%', background: color }} />
        </div>
      </div>
      <CategoryTableRowOptionsMenu />
    </div>
  );
};

export default React.memo(CategoryTableRow);
