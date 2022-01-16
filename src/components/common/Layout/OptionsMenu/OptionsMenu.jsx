import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { BsThreeDotsVertical } from 'react-icons/bs';
import classNames from 'classnames';

import Portal from '../Portal/Portal';
import { usePortal } from '../../../../hooks';

import './OptionsMenu.scss';

const OptionsMenu = ({ options, minWidth = 100, uiStateMode }) => {
  const optionMenuContentRef = useRef(null);
  const optionMenuButtonRef = useRef(null);
  const {
    open,
    coords,
    handlers: portalHandlers,
  } = usePortal(optionMenuContentRef, optionMenuButtonRef, {
    x: minWidth + 3,
    y: -5,
  });

  const handleSelect = (option) => {
    if (option.disabled) return;
    option.onClick();
    portalHandlers.handleClose();
  };

  return (
    <div className="optionsMenu">
      <div
        onClick={portalHandlers.handleExpand}
        className="optionsMenu__button"
        ref={optionMenuButtonRef}
      >
        <BsThreeDotsVertical />
      </div>
      {open && (
        <Portal elementId="menuOption-root">
          <div
            className="optionsMenu__options"
            style={{ ...coords, minWidth: `${minWidth}px` }}
            data-theme={uiStateMode}
            ref={optionMenuContentRef}
          >
            {options.map((option) => {
              const optionItemClassName = classNames(
                'optionsMenu__optionItem',
                {
                  'optionsMenu__optionItem--disabled': option.disabled,
                }
              );
              return (
                <div
                  key={option.name}
                  className={optionItemClassName}
                  onClick={() => handleSelect(option)}
                >
                  <div className="optionsMenu__optionIcon">{option.icon}</div>
                  <small>{option.name}</small>
                </div>
              );
            })}
          </div>
        </Portal>
      )}
    </div>
  );
};

OptionsMenu.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      name: PropTypes.string,
      icon: PropTypes.node,
    })
  ),
  minWidth: PropTypes.number,
  uiStateMode: PropTypes.string,
};

export default OptionsMenu;
