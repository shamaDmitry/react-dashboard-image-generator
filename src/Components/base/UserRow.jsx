import classNames from 'classnames';
import React from 'react';

const UserRow = ({ avatar, name, company, darkMode }) => {
  return (
    <div className="flex items-center flex-1">
      <div className="w-11 h-11 overflow-hidden rounded-full flex-shrink-0">
        <img
          src={avatar}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start ml-4">
        <p className={classNames("text-sm font-semibold whitespace-nowrap", {
          "text-gray-900": !darkMode,
          "text-gray-50": darkMode
        })}>
          {name}
        </p>

        {company && <span className={classNames("text-sm font-semibold whitespace-nowrap", {
          "text-gray-500": !darkMode,
          "text-gray-400": darkMode,
        })}>
          {company}
        </span>}
      </div>
    </div>
  );
}

export default UserRow;
