import { MdEditNote, MdDeleteForever, MdOutlineAddTask } from 'react-icons/md';

import { CATEGORY_MODAL } from '../../../../../constants/modalTypes';

export const getCategoryMenuOptions = (
  _id,
  selectCategoryToShow,
  showModal
) => [
  {
    name: 'Edit',
    icon: <MdEditNote />,
    disabled: false,
    onClick: () => showModal(CATEGORY_MODAL, { _id }),
  },
  {
    name: 'Delete',
    icon: <MdDeleteForever />,
    disabled: true,
    onClick: () => {},
  },
  {
    name: 'Show tasks',
    icon: <MdOutlineAddTask />,
    disabled: false,
    onClick: selectCategoryToShow,
  },
];
