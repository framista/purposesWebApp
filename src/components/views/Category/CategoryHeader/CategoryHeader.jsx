import React from 'react';
import PropTypes from 'prop-types';
import { MdAddBox } from 'react-icons/md';

import { CATEGORY_MODAL } from '../../../../constants/modalTypes';
import { SearchInput } from '../../../common/Filters';

import './CategoryHeader.scss';

const CategoryHeader = ({ showModal }) => {
  return (
    <div className="categoryHeader">
      <div className="categoryHeader__left">
        <h4 className="categoryHeader__title">Category</h4>
        <SearchInput />
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
  showModal: PropTypes.func,
};

export default React.memo(CategoryHeader);
