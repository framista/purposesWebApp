import React from 'react';
import PropTypes from 'prop-types';
import { MdAddBox } from 'react-icons/md';

import { ACTIVITY_MODAL } from '../../../../constants/modalTypes';
import { RangeCalendar, SearchInput } from '../../../common/Filters';
import CategoryMultiSelect from '../../Category/CategoryMultiSelect/CategoryMultiSelect.redux';

import './DashboardHeader.scss';

const DashboardHeader = ({
  showModal,
  changeSearchValueForDashboard,
  searchValue,
  getDashboardRouteData,
}) => {
  return (
    <div className="dashboardHeader">
      <div className="dashboardHeader__left">
        <h4 className="dashboardHeader__title">Dashboard</h4>
        <SearchInput
          onChange={changeSearchValueForDashboard}
          value={searchValue}
        />
        <CategoryMultiSelect />
        <RangeCalendar onClose={getDashboardRouteData} />
      </div>
      <button
        className="dashboardHeader__button"
        onClick={() => showModal(ACTIVITY_MODAL)}
      >
        <>
          <MdAddBox />
          <span>New activity</span>
        </>
      </button>
    </div>
  );
};

DashboardHeader.propTypes = {
  searchValue: PropTypes.string,
  showModal: PropTypes.func,
  changeSearchValueForDashboard: PropTypes.func,
};

export default React.memo(DashboardHeader);
