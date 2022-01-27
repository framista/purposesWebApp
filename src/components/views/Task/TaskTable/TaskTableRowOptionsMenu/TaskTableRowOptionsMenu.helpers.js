import { MdEditNote, MdDeleteForever } from 'react-icons/md';

import { TASK_MODAL } from '../../../../../constants/modalTypes';

export const getTaskMenuOptions = (_id, showModal) => [
  {
    name: 'Edit',
    icon: <MdEditNote />,
    disabled: false,
    onClick: () => showModal(TASK_MODAL, { _id }),
  },
  {
    name: 'Delete',
    icon: <MdDeleteForever />,
    disabled: true,
    onClick: () => {},
  },
];
