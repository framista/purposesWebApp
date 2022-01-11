import React from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';

import './SearchInput.scss';

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="searchInput">
      <MdSearch className="searchInput__icon" />
      <input
        className="searchInput__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
