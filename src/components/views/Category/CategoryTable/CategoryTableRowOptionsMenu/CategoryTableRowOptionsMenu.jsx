import React, { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { OptionsMenu } from '../../../../common/Layout';
import { getCategoryMenuOptions } from './CategoryTableRowOptionsMenu.helpers';

import './CategoryTableRowOptionsMenu.scss';

const CategoryTableRowOptionsMenu = ({
  _id,
  setSelectedCategories,
  showModal,
}) => {
  const navigate = useNavigate();

  const selectCategoryToShow = useCallback(() => {
    setSelectedCategories([_id]);
    navigate('/task');
  }, [_id]);

  const options = useMemo(
    () => getCategoryMenuOptions(_id, selectCategoryToShow, showModal),
    [selectCategoryToShow, _id]
  );
  return (
    <div className="categoryTableRowOptionsMenu">
      <OptionsMenu options={options} minWidth={120} />
    </div>
  );
};

export default React.memo(CategoryTableRowOptionsMenu);
