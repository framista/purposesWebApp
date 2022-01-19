import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { getRelevantActivities } from './Dashboard.helpers';

import DashboardTableHeader from './DashboardTableHeader/DashboardTableHeader.redux';
import DashboardTableRow from './DashboardTableRow/DashboardTableRow.redux';
import { NoData } from '../../../common/Layout';

import './DashboardTable.scss';

const DashboardTable = (props) => {
  const {
    searchValue,
    allCategories,
    allActivities,
    allTasks,
    sortingColumn,
    sortingWay,
    selectedCategories,
  } = props;

  const activities = useMemo(
    () =>
      getRelevantActivities(
        allTasks,
        allCategories,
        allActivities,
        searchValue,
        sortingColumn,
        sortingWay,
        selectedCategories
      ),
    [
      searchValue,
      allCategories,
      allTasks,
      sortingColumn,
      sortingWay,
      selectedCategories,
      allActivities,
    ]
  );

  return (
    <div className="dashboardTable">
      <DashboardTableHeader />
      {activities.length === 0 ? (
        <NoData text="No data to display. Add activity or change filters" />
      ) : (
        <OverlayScrollbarsComponent className="dashboardTable__scrollbar">
          {activities.map((activity) => (
            <DashboardTableRow key={activity._id} activity={activity} />
          ))}
        </OverlayScrollbarsComponent>
      )}
    </div>
  );
};

DashboardTable.propTypes = {
  searchValue: PropTypes.string,
  allCategories: PropTypes.shape({}),
  allTasks: PropTypes.shape({}),
  allActivities: PropTypes.shape({}),
  sortingColumn: PropTypes.string,
  sortingWay: PropTypes.string,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
};

export default DashboardTable;
