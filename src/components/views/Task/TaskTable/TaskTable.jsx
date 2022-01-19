import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { getRelevantTasks } from './TaskTable.helpers';

import TaskTableHeader from './TaskTableHeader/TaskTableHeader.redux';
import TaskTableRow from './TaskTableRow/TaskTableRow.redux';
import { NoData } from '../../../common/Layout';

import './TaskTable.scss';

const TaskTable = (props) => {
  const {
    searchValue,
    allCategories,
    allTasks,
    sortingColumn,
    sortingWay,
    selectedCategories,
  } = props;

  const tasks = useMemo(
    () =>
      getRelevantTasks(
        allTasks,
        allCategories,
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
    ]
  );

  return (
    <div className="taskTable">
      <TaskTableHeader />
      {tasks.length === 0 ? (
        <NoData text="No data to display. Add task or change filters" />
      ) : (
        <OverlayScrollbarsComponent className="taskTable__scrollbar">
          {tasks.map((task) => (
            <TaskTableRow key={task._id} task={task} />
          ))}
        </OverlayScrollbarsComponent>
      )}
    </div>
  );
};

TaskTable.propTypes = {
  searchValue: PropTypes.string,
  allCategories: PropTypes.shape({}),
  allTasks: PropTypes.shape({}),
  sortingColumn: PropTypes.string,
  sortingWay: PropTypes.string,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
};

export default TaskTable;
