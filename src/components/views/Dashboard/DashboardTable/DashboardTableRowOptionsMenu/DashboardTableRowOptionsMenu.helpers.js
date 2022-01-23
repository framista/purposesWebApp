import { MdEditNote, MdDeleteForever } from 'react-icons/md';
import { ACTIVITY_MODAL } from '../../../../../constants/modalTypes';

export const getOptions = (showModal, _id) => [
  {
    name: 'Edit',
    icon: <MdEditNote />,
    disabled: false,
    onClick: () => showModal(ACTIVITY_MODAL, { _id }),
  },
  {
    name: 'Delete',
    icon: <MdDeleteForever />,
    disabled: true,
    onClick: () => {},
  },
];
