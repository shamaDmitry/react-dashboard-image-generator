import { Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../atoms/darkModeAtom';
import Aside from '../Components/shared/Aside';
import classNames from 'classnames';

const NavbarLayout = () => {
  const [darkMode,] = useAtom(darkModeAtom);

  return (
    <div className="min-h-screen flex">
      <Aside
        darkMode={darkMode}
      />

      <main
        className={classNames("w-full px-[72px] py-[32px] relative ml-[264px]", {
          "bg-dark-bg text-gray-50": darkMode,
          "bg-white text-gray-900": !darkMode,
        })}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default NavbarLayout;
