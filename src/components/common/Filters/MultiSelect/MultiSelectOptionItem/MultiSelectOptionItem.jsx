import React from 'react';

const MultiSelectOptionItem = (props) => {
  const { _id, value, toggleOption, checked } = props;
  return (
    <label htmlFor={_id} className="multiSelect__option">
      <input
        type="checkbox"
        id={_id}
        onChange={() => {
          toggleOption(_id);
        }}
        checked={checked}
      />
      {value}
    </label>
  );
};

export default React.memo(MultiSelectOptionItem);
