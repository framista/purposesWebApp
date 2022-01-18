import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFound">
      <img src={'images/not-found.svg'} alt="not-found" />
      <Link className="notFound__text" to={'/'}>
        Go to Purposes App
      </Link>
    </div>
  );
};

export default React.memo(NotFound);
