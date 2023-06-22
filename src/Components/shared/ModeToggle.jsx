import { darkModeAtom } from '../../atoms/darkModeAtom';
import { useAtom } from 'jotai';

import classNames from 'classnames';
import DynamicIcon from '../../assets/icons/_DynamicIcon';

const ModeToggle = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  return (
    <div
      className={classNames("flex border-[2px] rounded-[12px] h-[52px]", {
        "border-dark-lvl-3": darkMode
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
          "bg-dark-lvl-3": darkMode
        })}
      >

        <DynamicIcon
          name="moon"
          className={classNames({
            "text-gray-400 ": !darkMode
          })}
        />

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
          "bg-gray-300": !darkMode,
          "opacity-30": darkMode
        })}
      >
        <DynamicIcon
          name="sun"
          className={classNames({
            "text-black ": !darkMode
          })}
        />
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
