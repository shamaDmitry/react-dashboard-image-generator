import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Button from '../base/Button';
import Logo from '../base/Logo';
import ModeToggle from './ModeToggle';
import SidebarMenu from './SidebarMenu';

import DynamicIcon from '../../assets/icons/_DynamicIcon';
import { mobileMenuToggleAtom } from '../../atoms/mobileMenuToggleAtom';
import { useAtom } from 'jotai';

const Aside = ({ darkMode }) => {
  const [mobileMenuToggle, setMobileMenuToggle] = useAtom(mobileMenuToggleAtom);

  return (
    <>
      <div
        onClick={() => setMobileMenuToggle(false)}
        className={classNames({
          "transition-all fixed w-full h-full bg-black opacity-50 top-0 left-0 z-10": mobileMenuToggle,
        })}
      />

      <aside
        className={classNames(`transition-all z-50 px-3 py-8 flex flex-col justify-start fixed lg:left-0 -left-[var(--aside-width)] top-0 h-full w-[var(--aside-width)]`, {
          "bg-gray-100": !darkMode,
          "bg-dark text-white": darkMode,
          "left-0": mobileMenuToggle,
        })}
      >
        <Button
          className="self-start mb-8 lg:hidden"
          type="hollow"
          onClick={() => setMobileMenuToggle(false)}
          icon={<DynamicIcon name="close" className={classNames("")} />}
          darkMode={darkMode}
        />

        <Link to="/" className="hidden lg:block mb-3">
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
    </>
  );
}

export default Aside;
