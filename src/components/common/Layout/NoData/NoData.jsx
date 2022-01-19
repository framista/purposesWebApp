import React from 'react';
import PropTypes from 'prop-types';

import './NoData.scss';

const NoData = ({ text }) => {
  return (
    <div className="noData">
      <img src={'images/no-data.svg'} alt="no-data" />
      <p className="noData__text">{text}</p>
    </div>
  );
};

NoData.propTypes = {
  text: PropTypes.string,
};

export default React.memo(NoData);
