import React from 'react';
import PropTypes from 'prop-types';
import TaskTableRowOptionsMenu from '../TaskTableRowOptionsMenu/TaskTableRowOptionsMenu';

import './TaskTableRow.scss';

const TaskTableRow = (props) => {
  const { task, category } = props;
  const { name, description, points } = task;

  return (
    <div className="taskTableRow">
      <p className="taskTableRow__name">{name}</p>
      <p className="taskTableRow__description">{description}</p>
      <p className="taskTableRow__points">{points}</p>
      <div className="taskTableRow__categoryColumn">
        <span
          className="taskTableRow__dot"
          style={{ background: category.color }}
        />
        <span>{category.name}</span>
      </div>
      <TaskTableRowOptionsMenu />
    </div>
  );
};

TaskTableRow.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    points: PropTypes.number,
    color: PropTypes.string,
  }),
};

export default React.memo(TaskTableRow);
