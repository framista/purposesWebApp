import React from 'react';
import PropTypes from 'prop-types';
import { MdAddBox } from 'react-icons/md';

import { CATEGORY_MODAL } from '../../../../constants/modalTypes';
import { SearchInput } from '../../../common/Filters';

import './CategoryHeader.scss';

const CategoryHeader = ({
  showModal,
  changeSearchValueForCategory,
  searchValue,
}) => {
  return (
    <div className="categoryHeader">
      <div className="categoryHeader__left">
        <h4 className="categoryHeader__title">Category</h4>
        <SearchInput
          onChange={changeSearchValueForCategory}
          value={searchValue}
        />
      </div>
      <button
        className="categoryHeader__button"
        onClick={() => showModal(CATEGORY_MODAL)}
      >
        <>
          <MdAddBox />
          <span>New Category</span>
        </>
      </button>
    </div>
  );
};

CategoryHeader.propTypes = {
  searchValue: PropTypes.string,
  showModal: PropTypes.func,
  changeSearchValueForCategory: PropTypes.func,
};

export default React.memo(CategoryHeader);
