import React, { useRef, useState } from 'react';
import { MdOutlineCalendarToday } from 'react-icons/md';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';

import { usePortal } from '../../../../hooks';
import { COLOR_PRIMARY } from '../../../../constants/color';

import './RangeCalendar.scss';

const RangeCalendar = (props) => {
  const { selectLabel, uiStateMode } = props;
  const calendarContentRef = useRef(null);
  const calendarButtonRef = useRef(null);

  const {
    open,
    coords,
    handlers: portalHandlers,
  } = usePortal(calendarContentRef, calendarButtonRef, { x: 0, y: 35 });

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
      color: COLOR_PRIMARY,
    },
  ]);

  return (
    <div className="rangeCalendar">
      <div
        className="rangeCalendar__button"
        onClick={portalHandlers.handleExpand}
        ref={calendarButtonRef}
      >
        <MdOutlineCalendarToday />
        <p className="rangeCalendar__selectLabel">{selectLabel}</p>
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
