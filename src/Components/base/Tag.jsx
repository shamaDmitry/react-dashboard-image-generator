import classNames from 'classnames';
import React from 'react';

const Tag = ({ label, darkMode = false, active }) => {
  return (
    <div
      className={
        classNames("cursor-pointer inline-flex items-center justify-center border-2 text-sm py-2 px-4 rounded-full font-semibold", {
          "border-gray-400 text-gray-400": !darkMode,
          "text-gray-900 bg-gray-100": active
        })
      }
    >
      {label}
    </div>
  );
}

export default Tag;
