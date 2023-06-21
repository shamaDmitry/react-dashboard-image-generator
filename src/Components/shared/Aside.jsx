import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Button from '../base/Button';
import Logo from '../base/Logo';
import ModeToggle from './ModeToggle';
import SidebarMenu from './SidebarMenu';

import Clock from '../../assets/icons/Clock';

const Aside = ({ darkMode }) => {
  return (
    <aside
      className={classNames('px-3 py-8 flex flex-col justify-start fixed left-0 top-0 h-full z-10 w-[265px]', {
        'bg-gray-100': !darkMode,
        'bg-dark text-white': darkMode,
      })}
    >
      <Link to="/" className="block mb-3">
        <Logo
          className="mx-auto hover:opacity-70"
          color={darkMode ? "#fff" : "#1E2235"}
        />
      </Link>

      <Button
        className="mb-6"
        label="Create"
        type="primary"
        fullWidth
        icon={<Clock color="#fff" />}
      />

      <SidebarMenu className="mb-6"></SidebarMenu>

      <div className="mt-auto">
        <ModeToggle />
      </div>
    </aside>
  );
}

export default Aside;
