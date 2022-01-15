import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import { getRelevantTasks } from './TaskTable.helpers';

import TaskTableHeader from './TaskTableHeader/TaskTableHeader.redux';
import TaskTableRow from './TaskTableRow/TaskTableRow.redux';

import './TaskTable.scss';

const TaskTable = (props) => {
  const { searchValue, allCategories, allTasks, sortingColumn, sortingWay } =
    props;

  const tasks = useMemo(
    () =>
      getRelevantTasks(
        allTasks,
        allCategories,
        searchValue,
        sortingColumn,
        sortingWay
      ),
    [searchValue, allCategories, allTasks, sortingColumn, sortingWay]
  );

  return (
    <div className="taskTable">
      <TaskTableHeader />
      <OverlayScrollbarsComponent className="taskTable__scrollbar">
        {tasks.map((task) => (
          <TaskTableRow key={task._id} task={task} />
        ))}
      </OverlayScrollbarsComponent>
    </div>
  );
};

TaskTable.propTypes = {
  searchValue: PropTypes.string,
  allCategories: PropTypes.shape({}),
  allTasks: PropTypes.shape({}),
  sortingColumn: PropTypes.string,
  sortingWay: PropTypes.string,
};

export default TaskTable;
