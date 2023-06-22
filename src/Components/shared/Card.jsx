import React from 'react';

import Stats from '../base/Stats';
import UserRow from '../base/UserRow';

import Heart from '../../assets/icons/Heart';
import OpenEye from '../../assets/icons/OpenEye';
import DynamicIcon from '../../assets/icons/_DynamicIcon';
import classNames from 'classnames';

const Card = ({ media, author, stats }) => {
  const { avatar, name } = author;

  return (
    <div className="flex flex-col">
      <div className="mb-4 border-4 rounded-card overflow-hidden max-h-[390px]">
        <img
          src={media}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex gap-4">
        <UserRow
          avatar={avatar}
          name={name}
        />

        <div className="flex gap-3">
          {
            stats.map(stat => {
              return (
                <Stats
                  key={stat.id}
                  icon={
                    <DynamicIcon
                      name={stat.icon}
                      className={classNames('font-semibold text-base', {})}
                    />
                  }
                  count={stat.count}
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
