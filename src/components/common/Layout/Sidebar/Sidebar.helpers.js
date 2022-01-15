import { MdCategory, MdAreaChart, MdOutlineAddTask } from 'react-icons/md';

export const sidebarOptions = [
  {
    id: 'dashboard',
    destination: '/dashboard',
    icon: <MdAreaChart />,
    name: 'Dashboard',
  },
  {
    id: 'category',
    destination: '/category',
    icon: <MdCategory />,
    name: 'Categories',
  },
  {
    id: 'task',
    destination: '/task',
    icon: <MdOutlineAddTask />,
    name: 'Tasks',
  },
];
