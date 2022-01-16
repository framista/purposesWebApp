import React from 'react';
import PropTypes from 'prop-types';

import './MultiSelectAllOrNone.scss';

const MultiSelectAllOrNone = ({ selectLabel, deselectAll, selectAll }) => {
  return (
    <div className="multiSelectAllOrNone">
      <label className="multiSelectAllOrNone__label">{selectLabel}</label>
      <div className="multiSelectAllOrNone__options">
        <p className="multiSelectAllOrNone__button" onClick={selectAll}>
          all
        </p>
        <p className="multiSelectAllOrNone__button" onClick={deselectAll}>
          none
        </p>
      </div>
    </div>
  );
};

MultiSelectAllOrNone.propTypes = {
  selectLabel: PropTypes.string,
  deselectAll: PropTypes.func,
  selectAll: PropTypes.func,
};

export default React.memo(MultiSelectAllOrNone);
