import React from 'react';

import Stats from '../base/Stats';
import UserRow from '../base/UserRow';

import DynamicIcon from '../../assets/icons/_DynamicIcon';
import classNames from 'classnames';

const Card = ({ media, author, stats, darkMode }) => {
  const { avatar, name } = author;

  return (
    <div className="flex flex-col">
      <div
        className={classNames("mb-4 border-4 rounded-card overflow-hidden max-h-[390px]", {
          "border-gray-300": !darkMode,
          "border-gray-700": darkMode,
        })}
      >
        <img
          src={media}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <UserRow
          avatar={avatar}
          name={name}
          darkMode={darkMode}
        />

        <div className="flex gap-3 justify-end">
          {
            stats.map(stat => {
              return (
                <Stats
                  key={stat.id}
                  icon={
                    <DynamicIcon
                      name={stat.icon}
                      className={classNames('font-semibold text-base', {
                        "text-gray-500": !darkMode,
                        "text-gray-400": darkMode,
                      })}
                    />
                  }
                  count={stat.count}
                  darkMode={darkMode}
                />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Card;
