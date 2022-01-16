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
  } = props;

  const options = useMemo(
    () => getCategoryOptions(allCategories),
    [allCategories]
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
    />
  );
};

CategoryMultiSelect.propTypes = {
  allCategories: PropTypes.shape({}),
  toggleCategory: PropTypes.func,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
  deselectAllCategories: PropTypes.func,
  selectAllCategorier: PropTypes.func,
};

export default React.memo(CategoryMultiSelect);
