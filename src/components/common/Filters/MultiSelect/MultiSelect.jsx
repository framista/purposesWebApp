import React, { useRef } from 'react';

import { usePortal } from '../../../../hooks';

import Portal from '../../Layout/Portal/Portal';
import { SearchInput } from '../index';

import './MultiSelect.scss';

const MultiSelect = (props) => {
  const { icon, selectLabel, options = [], uiStateMode } = props;
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
        <Portal elementId="filter-root">
          <div
            className="multiSelect__content"
            style={coords}
            data-theme={uiStateMode}
            ref={multiSelectContentRef}
          >
            <SearchInput />
          </div>
        </Portal>
      )}
    </div>
  );
};

export default MultiSelect;
