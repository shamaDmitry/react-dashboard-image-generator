import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Home from '../../assets/icons/Home';
import Collection from '../../assets/icons/Collection';
import classNames from 'classnames';
import { useAtom } from 'jotai';
import { darkModeAtom } from '../../atoms/darkModeAtom';
import Clock from '../../assets/icons/Clock';

const menu = [
  {
    "title": "Home",
    "to": "/home",
    "icon": <Home />,
  },
  {
    "title": "Colection",
    "to": "/colection",
    "icon": <Collection />,
  },
]

const Sidebar = ({ className }) => {
  const [darkMode] = useAtom(darkModeAtom);

  return (
    <nav className={classNames(`${className ? className : ''} flex flex-col gap-6 overflow-auto overflow-x-hidden`)}>
      {
        menu.map((item) => {
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive, isPending }) => {
                return classNames('flex items-center gap-4 rounded-[12px] py-3 px-4 text-gray-400', {
                  "bg-gray-200": isActive && !darkMode,
                })
              }}
            >
              {({ isActive, isPending }) => (
                <>
                  <span>
                    {/* <Clock
                      color={isActive && !darkMode ? "#000" : "#fff"}
                    /> */}

                    {item.icon}
                  </span>
                  <span
                    className={classNames('font-semibold text-base text-gray-400', {
                      "text-black": isActive && !darkMode,
                      "text-white": isActive && darkMode,
                    })}
                  >
                    {item.title}
                  </span>
                </>
              )}
            </NavLink>
          )
        })
      }
    </nav>
  );
}

export default Sidebar;
