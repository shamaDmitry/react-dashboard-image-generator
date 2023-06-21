import React from 'react';

const UserRow = ({ avatar, name, company }) => {
  return (
    <div className="flex items-center flex-1">
      <div className="w-11 h-11 overflow-hidden rounded-full flex-shrink-0">
        <img
          src={avatar}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col items-start ml-4">
        <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">
          {name}
        </p>

        {company && <span className="text-sm font-semibold text-gray-500 whitespace-nowrap">
          {company}
        </span>}
      </div>
    </div>
  );
}

export default UserRow;
