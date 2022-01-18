import {
  MdCategory,
  MdAreaChart,
  MdOutlineAddTask,
  MdOutlineArticle,
} from 'react-icons/md';

export const widthForChanges = 768;

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
  {
    id: 'about',
    destination: '/about',
    icon: <MdOutlineArticle />,
    name: 'About',
  },
];
