import React from 'react';
import classNames from 'classnames';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useAtom } from 'jotai';

import ModeToggle from '../Components/ModeToggle';
import Button from '../Components/base/Button';
import Logo from '../Components/base/Logo';
import Sidebar from '../Components/shared/Sidebar';

import Clock from '../assets/icons/Clock';

import { darkModeAtom } from '../atoms/darkModeAtom';

const NavbarLayout = ({ children }) => {
  const [darkMode,] = useAtom(darkModeAtom);

  return (
    <div className="min-h-screen flex">
      <aside
        className={classNames('px-3 py-8 flex flex-col justify-start', {
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

        <Sidebar className="text-black">
          {/* <NavLink
            to="/home"
            className={({ isActive, isPending }) => {
              return classNames('flex items-center gap-4 rounded-[12px] py-3 px-4 text-gray-400', {
                "bg-gray-200": isActive && !darkMode,
              })
            }}
          >
            {({ isActive, isPending }) => (
              <>
                <span>
                  <Clock
                    color={isActive && !darkMode ? "#000" : "#fff"}
                  />
                </span>
                <span
                  className={classNames('font-semibold text-base text-gray-400', {
                    "text-black": isActive && !darkMode,
                    "text-white": isActive && darkMode,
                  })}
                >
                  Home
                </span>
              </>
            )}
          </NavLink> */}
        </Sidebar>

        <div className="mt-auto">
          {/* <Sidebar className="mb-8"></Sidebar> */}

          <ModeToggle />
        </div>
      </aside>

      <main className="w-full px-[72px] py-[32px] relative">
        <Outlet />
      </main>
    </div>
  );
}

export default NavbarLayout;
