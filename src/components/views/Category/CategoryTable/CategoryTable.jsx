import React, { useMemo } from 'react';
import { getRelevantCategories } from './CategoryTable.helpers';

import CategoryTableHeader from './CategoryTableHeader/CategoryTableHeader.redux';
import CategoryTableRow from './CategoryTableRow/CategoryTableRow.redux';

import './CategoryTable.scss';

const CategoryTable = (props) => {
  const { searchValue, allCategories } = props;

  const categories = useMemo(
    () => getRelevantCategories(allCategories, searchValue),
    [searchValue, allCategories]
  );

  return (
    <div className="categoryTable">
      <CategoryTableHeader />
      {categories.map((category) => (
        <CategoryTableRow key={category._id} category={category} />
      ))}
    </div>
  );
};

export default CategoryTable;
