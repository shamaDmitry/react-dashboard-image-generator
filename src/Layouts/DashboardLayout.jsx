import { Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../atoms/darkModeAtom';
import Aside from '../Components/shared/Aside';

const NavbarLayout = () => {
  const [darkMode,] = useAtom(darkModeAtom);

  return (
    <div className="min-h-screen flex">
      <Aside
        darkMode={darkMode}
      />

      <main className="w-full px-[72px] py-[32px] relative">
        <Outlet />
      </main>
    </div>
  );
}

export default NavbarLayout;
