import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CategoryHeader from './CategoryHeader/CategoryHeader.redux';
import CategoryModal from './CategoryModal/CategoryModal.redux';
import Loading from '../../common/Layout/Loading/Loading';

const Category = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    const fetchData = async () => {
      setLoading(true);
      await props.getCategoryRouteData();
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <CategoryModal />
      <div className="app__content">
        <CategoryHeader />
      </div>
      {loading ? <Loading /> : null}
    </>
  );
};

Category.propTypes = {
  getCategoryRouteData: PropTypes.func,
};

export default Category;
