import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Button from '../base/Button';
import Logo from '../base/Logo';
import ModeToggle from './ModeToggle';
import SidebarMenu from './SidebarMenu';

import DynamicIcon from '../../assets/icons/_DynamicIcon';

const Aside = ({ darkMode }) => {
  return (
    <aside
      className={classNames(`transition-all px-3 py-8 flex flex-col justify-start fixed lg:left-0 -left-[var(--aside-width)] top-0 h-full z-10 w-[var(--aside-width)]`, {
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
        icon={<DynamicIcon name="clock" className={classNames("text-white")} />}
      />

      <SidebarMenu className="mb-6"></SidebarMenu>

      <div className="mt-auto">
        <ModeToggle />
      </div>
    </aside>
  );
}

export default Aside;
