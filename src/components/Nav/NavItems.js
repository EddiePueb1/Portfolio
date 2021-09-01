import { BiHomeAlt, BiTask } from 'react-icons/bi';
import { BsList } from 'react-icons/bs';

const NavItems = [
  {
    name: 'About Me',
    path: 'about',
    icon: BiHomeAlt,
    cName: 'nav-links'
  },
  {
    name: 'Projects',
    path: 'projects',
    icon: BiTask,
    cName: 'nav-links'
  },
  {
    name: 'Resume',
    path: 'resume',
    // icon: <BsList />,
    cName: 'nav-links'
  },
  {
    // name: 'Contact',
    // url: '/contact'
  }

]

export default NavItems;