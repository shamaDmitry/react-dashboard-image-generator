import React from 'react';

const Stats = ({ icon, count }) => {
  return (
    <div className="flex items-center gap-[4px]">
      {icon}
      <span className="text-stats">
        {count}
      </span>
    </div>
  );
}

export default Stats;
