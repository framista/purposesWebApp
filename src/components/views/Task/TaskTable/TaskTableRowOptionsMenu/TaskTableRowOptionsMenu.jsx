import React from 'react';
import { MdEditNote, MdDeleteForever } from 'react-icons/md';

import { OptionsMenu } from '../../../../common/Layout';

import './TaskTableRowOptionsMenu.scss';

const TaskTableRowOptionsMenu = () => {
  const options = [
    {
      name: 'Edit',
      icon: <MdEditNote />,
      disabled: true,
      onClick: () => console.log('edit'),
    },
    {
      name: 'Delete',
      icon: <MdDeleteForever />,
      disabled: false,
      onClick: () => console.log('del'),
    },
  ];
  return (
    <div className="taskTableRowOptionsMenu">
      <OptionsMenu options={options} />
    </div>
  );
};

export default TaskTableRowOptionsMenu;
