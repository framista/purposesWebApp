import React from 'react';
import { MdAddBox } from 'react-icons/md';
import './CategoryHeader.scss';

const CategoryHeader = () => {
  return (
    <div className="categoryHeader">
      <h4 className="categoryHeader__title">Category</h4>
      <button className="categoryHeader__button">
        <>
          <MdAddBox />
          <span>New Category</span>
        </>
      </button>
    </div>
  );
};

export default React.memo(CategoryHeader);
