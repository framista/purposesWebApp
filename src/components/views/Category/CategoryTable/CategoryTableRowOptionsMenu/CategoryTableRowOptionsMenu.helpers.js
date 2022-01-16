import { MdEditNote, MdDeleteForever, MdOutlineAddTask } from 'react-icons/md';

export const getCategoryMenuOptions = (selectCategoryToShow) => [
  {
    name: 'Edit',
    icon: <MdEditNote />,
    disabled: true,
    onClick: () => {},
  },
  {
    name: 'Delete',
    icon: <MdDeleteForever />,
    disabled: false,
    onClick: () => {},
  },
  {
    name: 'Show tasks',
    icon: <MdOutlineAddTask />,
    disabled: false,
    onClick: selectCategoryToShow,
  },
];
