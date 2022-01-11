import React from 'react';
import { MdSearch } from 'react-icons/md';

import './SearchInput.scss';

const SearchInput = () => {
  return (
    <div className="searchInput">
      <MdSearch className="searchInput__icon" />
      <input className="searchInput__input" />
    </div>
  );
};

export default SearchInput;
