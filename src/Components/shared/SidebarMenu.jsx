// libs
import { NavLink, useNavigate } from 'react-router-dom';
import classNames from 'classnames';

// state
import { useAtom } from 'jotai';
import { darkModeAtom } from '../../atoms/darkModeAtom';

import DynamicIcon from '../../assets/icons/_DynamicIcon';

const menu = [
  {
    "title": "Home",
    "to": "/home",
    "icon": "home",
  },
  {
    "title": "Collection",
    "to": "/collection",
    "icon": "collection",
  },
  {
    "title": "Downloads",
    "to": "/downloads",
    "icon": "downloads",
  },
  {
    "title": "Chat",
    "to": "/chat",
    "icon": "chat",
  },
  {
    "title": "History",
    "to": "/history",
    "icon": "clock",
  },
  {
    "title": "Settings",
    "to": "/settings",
    "icon": "settings",
  },
];

const Sidebar = ({ className }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();

    setTimeout(() => {
      navigate('/login', { replace: true });
    }, 2000)
  }

  const [darkMode] = useAtom(darkModeAtom);

  return (
    <nav className={classNames(`${className ? className : ''} flex flex-col overflow-auto overflow-x-hidden flex-1`)}>
      {
        menu.map((item) => {
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => {
                return classNames('flex items-center gap-4 rounded-[12px] py-3 px-4 text-gray-400', {
                  "bg-gray-200": isActive && !darkMode,
                  "bg-dark-lvl-3": isActive && darkMode,
                  "mt-auto": item.title === "Settings"
                })
              }}
            >
              {({ isActive }) => (
                <>
                  <span>
                    <DynamicIcon
                      name={item.icon}
                      className={classNames('font-semibold text-base', {
                        "text-black": isActive && !darkMode,
                        "text-white": isActive && darkMode,
                      })}
                    />
                  </span>
                  <span
                    className={classNames('font-semibold text-base', {
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

      <button
        className={classNames('flex items-center gap-4 rounded-[12px] py-3 px-4 text-gray-400 border-none hover:underline')}
        onClick={handleLogOut}
      >
        <DynamicIcon
          name="clock"
          className={classNames('font-semibold text-base')}
        />

        <span
          className={classNames('font-semibold text-base')}
        >
          Logout
        </span>
      </button>
    </nav>
  );
}

export default Sidebar;
