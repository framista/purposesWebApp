import React from 'react';

import CategoryHeader from './CategoryHeader/CategoryHeader.redux';
import CategoryModal from './CategoryModal/CategoryModal.redux';

const Category = () => {
  return (
    <>
      <CategoryModal />
      <div className="app__content">
        <CategoryHeader />
      </div>
    </>
  );
};

export default Category;
