import React from 'react';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <progress indeterminate="true"></progress>
    </div>
  );
};

export default Loading;
