import React from 'react';
import Bell from '../../../assets/icons/Bell';

const UserNotificationCenter = () => {
  return (
    <div className="inline-flex relative">
      <button className="w-12 h-12 flex items-center justify-center border-2 rounded-large">
        <Bell />
      </button>
      <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-400" />
    </div>
  );
}

export default UserNotificationCenter;
