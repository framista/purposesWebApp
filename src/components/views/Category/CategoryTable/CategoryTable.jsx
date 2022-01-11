import React from 'react';

import './CategoryTable.scss';
import CategoryTableHeader from './CategoryTableHeader/CategoryTableHeader.redux';
import CategoryTableRow from './CategoryTableRow/CategoryTableRow.redux';

const CategoryTable = (props) => {
  return (
    <div className="categoryTable">
      <CategoryTableHeader />
      {Object.values(props.allCategories).map((category) => (
        <CategoryTableRow key={category._id} category={category} />
      ))}
    </div>
  );
};

export default CategoryTable;
