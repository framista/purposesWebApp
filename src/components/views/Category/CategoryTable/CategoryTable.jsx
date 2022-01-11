import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { getRelevantCategories } from './CategoryTable.helpers';

import CategoryTableHeader from './CategoryTableHeader/CategoryTableHeader.redux';
import CategoryTableRow from './CategoryTableRow/CategoryTableRow.redux';

import './CategoryTable.scss';

const CategoryTable = (props) => {
  const { searchValue, allCategories, sortingColumn, sortingWay } = props;

  const categories = useMemo(
    () =>
      getRelevantCategories(
        allCategories,
        searchValue,
        sortingColumn,
        sortingWay
      ),
    [searchValue, allCategories, sortingColumn, sortingWay]
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

CategoryTable.propTypes = {
  searchValue: PropTypes.string,
  allCategories: PropTypes.shape({}),
  sortingColumn: PropTypes.string,
  sortingWay: PropTypes.string,
};

export default CategoryTable;
