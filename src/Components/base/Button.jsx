import classNames from 'classnames';
import React from 'react';

const Button = ({ type = "primary", label, icon, fullWidth, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(`${className} flex items-center gap-[10px] justify-center  text-white rounded-[12px] py-3 px-4 min-w-[240px] `, {
        "bg-blue-600 hover:bg-blue-800": type === "primary",
        "w-full": fullWidth
      })}
    >
      {icon && <span className="">{icon}</span>}
      <span>
        {label}
      </span>
    </button>
  );
}

export default Button;
