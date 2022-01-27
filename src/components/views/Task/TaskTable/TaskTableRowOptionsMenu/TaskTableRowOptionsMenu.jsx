import React, { useMemo } from 'react';

import { OptionsMenu } from '../../../../common/Layout';
import { getTaskMenuOptions } from './TaskTableRowOptionsMenu.helpers';

import './TaskTableRowOptionsMenu.scss';

const TaskTableRowOptionsMenu = ({ _id, showModal }) => {
  const options = useMemo(() => getTaskMenuOptions(_id, showModal), [_id]);
  return (
    <div className="taskTableRowOptionsMenu">
      <OptionsMenu options={options} />
    </div>
  );
};

export default React.memo(TaskTableRowOptionsMenu);
