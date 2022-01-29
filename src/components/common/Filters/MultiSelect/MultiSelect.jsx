import React, { useRef } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { usePortal } from '../../../../hooks';

import { SearchInput } from '../index';
import MultiSelectOptionItem from './MultiSelectOptionItem/MultiSelectOptionItem';
import MultiSelectAllOrNone from './MultiSelectAllOrNone/MultiSelectAllOrNone';

import './MultiSelect.scss';

const MultiSelect = (props) => {
  const {
    icon,
    selectLabel,
    options = [],
    uiStateMode,
    toggleOption,
    selected,
    deselectAll,
    selectAll,
    searchInput,
    onSearchInputChange,
  } = props;
  const multiSelectContentRef = useRef(null);
  const multiSelectButtonRef = useRef(null);

  const {
    open,
    coords,
    handlers: portalHandlers,
  } = usePortal(multiSelectContentRef, multiSelectButtonRef, { x: 0, y: 35 });

  return (
    <div className="multiSelect">
      <div
        className="multiSelect__button"
        onClick={portalHandlers.handleExpand}
        ref={multiSelectButtonRef}
      >
        {icon}
        <p className="multiSelect__selectLabel">{selectLabel}</p>
      </div>
      {open && (
        <div
          className="multiSelect__content"
          style={coords}
          data-theme={uiStateMode}
          ref={multiSelectContentRef}
          data-testid="multiSelect-content"
        >
          <SearchInput value={searchInput} onChange={onSearchInputChange} />
          <MultiSelectAllOrNone
            selectAll={selectAll}
            deselectAll={deselectAll}
            selectLabel={selectLabel}
          />
          <OverlayScrollbarsComponent className="multiSelect__scrollbar">
            {options.map((option) => {
              return (
                <MultiSelectOptionItem
                  checked={selected.includes(option._id)}
                  _id={option._id}
                  key={option._id}
                  value={option.value}
                  toggleOption={toggleOption}
                />
              );
            })}
          </OverlayScrollbarsComponent>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
