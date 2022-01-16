import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsThreeDotsVertical } from 'react-icons/bs';
import classNames from 'classnames';

import Portal from '../Portal/Portal';

import './OptionsMenu.scss';

const OptionsMenu = ({ options, minWidth = 100, uiStateMode }) => {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({});

  const updateTooltipCoords = (target) => {
    const rect = target.getBoundingClientRect();
    setCoords({
      left: rect.x - minWidth,
      top: rect.y + window.scrollY,
    });
  };

  const handleExpand = (e) => {
    updateTooltipCoords(e.target);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (option) => {
    if (option.disabled) return;
    option.onClick();
    handleClose();
  };

  return (
    <div className="optionsMenu">
      <div
        tabIndex={0}
        onFocus={handleExpand}
        onBlur={handleClose}
        className="optionsMenu__button"
      >
        <BsThreeDotsVertical />
      </div>
      {open && (
        <Portal elementId="menuOption-root">
          <div
            className="optionsMenu__options"
            style={{ ...coords, minWidth: `${minWidth}px` }}
            data-theme={uiStateMode}
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
