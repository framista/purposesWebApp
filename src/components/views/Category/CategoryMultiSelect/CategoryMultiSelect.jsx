import React, { useMemo } from 'react';
import { MdCategory } from 'react-icons/md';
import PropTypes from 'prop-types';

import { MultiSelect } from '../../../common/Filters';
import { getCategoryOptions } from './CategoryMultiSelect.helpers';

import './CategoryMultiSelect.scss';

const CategoryMultiSelect = (props) => {
  const {
    allCategories,
    toggleCategory,
    selectedCategories,
    deselectAllCategories,
    selectAllCategorieries,
    setSearchCategories,
    searchCategory,
  } = props;

  const options = useMemo(
    () => getCategoryOptions(allCategories, searchCategory),
    [allCategories, searchCategory]
  );

  return (
    <MultiSelect
      icon={<MdCategory />}
      selectLabel="Category"
      options={options}
      toggleOption={toggleCategory}
      selected={selectedCategories}
      deselectAll={deselectAllCategories}
      selectAll={selectAllCategorieries}
      searchInput={searchCategory}
      onSearchInputChange={setSearchCategories}
    />
  );
};

CategoryMultiSelect.propTypes = {
  allCategories: PropTypes.shape({}),
  toggleCategory: PropTypes.func,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  deselectAllCategories: PropTypes.func,
  selectAllCategorier: PropTypes.func,
  setSearchCategories: PropTypes.func,
  searchCategory: PropTypes.string,
};

export default React.memo(CategoryMultiSelect);
