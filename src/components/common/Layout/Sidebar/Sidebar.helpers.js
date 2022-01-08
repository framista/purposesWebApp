import { MdCategory, MdAreaChart } from 'react-icons/md';

export const sidebarOptions = [
  {
    id: 'category',
    destination: '/category',
    icon: <MdCategory />,
    name: 'Categories',
  },
  {
    id: 'dashboard',
    destination: '/dashboard',
    icon: <MdAreaChart />,
    name: 'Dashboard'
  },
];
