import React from 'react';
import { darkModeAtom } from '../atoms/darkModeAtom';
import { useAtom } from 'jotai';

import Moon from '../assets/icons/Moon';
import Sun from '../assets/icons/Sun';
import classNames from 'classnames';

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <div
      className={classNames("flex border-[2px] rounded-[12px] h-[52px]", {
        "border-[#252A41]": darkMode
      })}
    >
      <input
        id="dark-mode"
        className="peer sr-only"
        name="mode"
        type="radio"
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label
        htmlFor="dark-mode"
        className={classNames(`transition-all cursor-pointer flex items-center justify-center flex-1 rounded-[12px] gap-2`, {
          "bg-[#252A41]": darkMode
        })}
      >

        <Moon color={!darkMode ? "#9CA3AF" : "#fff"} />

        <span
          className={classNames(`font-semibold text-lg capitalize`, {
            "text-gray-400 ": !darkMode
          })}
        >
          dark
        </span>
      </label>

      <input
        id="light-mode"
        className="peer sr-only"
        name="mode"
        type="radio"
        checked={!darkMode}
        onChange={() => setDarkMode(!darkMode)}
      />
      <label
        htmlFor="light-mode"
        className={classNames(`transition-all cursor-pointer flex items-center justify-center flex-1 rounded-[12px] gap-2`, {
          "bg-gray-300": !darkMode
        })}
      >
        <Sun color={!darkMode ? "#000" : "#fff"} />

        <span
          className={classNames(`font-semibold text-lg capitalize`, {
            "text-black ": !darkMode
          })}
        >
          light
        </span>
      </label>
    </div>
  );
}

export default ModeToggle;
