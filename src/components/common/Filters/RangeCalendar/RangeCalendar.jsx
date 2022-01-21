import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { DateRangePicker } from 'react-date-range';

import { usePortal } from '../../../../hooks';
import { formatDate } from '../../../../utils/dateHelpers';
import {
  getCalendarDateObject,
  getDatesToDisplay,
} from './RangeCalendar.helpers';

import './RangeCalendar.scss';

const RangeCalendar = (props) => {
  const { uiStateMode, startDate, endDate, changeDates, onClose } = props;
  const calendarContentRef = useRef(null);
  const calendarButtonRef = useRef(null);

  const {
    open,
    coords,
    handlers: portalHandlers,
  } = usePortal(
    calendarContentRef,
    calendarButtonRef,
    { x: 0, y: 35 },
    onClose
  );

  const [state, setState] = useState([
    getCalendarDateObject(startDate, endDate),
  ]);

  useEffect(() => {
    if (state[0]?.startDate && state[0]?.endDate)
      changeDates(
        formatDate(state[0].startDate, 1),
        formatDate(state[0].endDate, 1)
      );
  }, [state[0]?.startDate, state[0]?.endDate]);

  return (
    <div className="rangeCalendar">
      <div
        className="rangeCalendar__button"
        onClick={portalHandlers.handleExpand}
        ref={calendarButtonRef}
      >
        <MdOutlineCalendarToday />
        <p className="rangeCalendar__selectLabel">
          {getDatesToDisplay(startDate, endDate)}
        </p>
      </div>
      {open && (
        <div
          className="rangeCalendar__content"
          style={coords}
          data-theme={uiStateMode}
          ref={calendarContentRef}
        >
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            direction="horizontal"
            inputRanges={[]}
          />
        </div>
      )}
    </div>
  );
};

export default RangeCalendar;
