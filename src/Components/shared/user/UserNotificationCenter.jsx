import classNames from 'classnames';
import DynamicIcon from '../../../assets/icons/_DynamicIcon';

const UserNotificationCenter = ({ darkMode }) => {
  return (
    <div className="inline-flex relative">
      <button
        className={classNames("w-12 h-12 flex items-center justify-center border-2 rounded-large", {
          "border-gray-200": !darkMode,
          "border-gray-700": darkMode,
        })}
      >
        <DynamicIcon
          name="bell"
          className={classNames({
            "text-gray-900": !darkMode,
            "text-white": darkMode,
          })}
        />
      </button>
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400" />
    </div>
  );
}

export default UserNotificationCenter;
