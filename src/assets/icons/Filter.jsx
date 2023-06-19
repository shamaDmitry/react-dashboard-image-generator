import React from 'react';

const Filter = ({ color = "#9CA3AF" }) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.10837 1.75L5.00004 8.33333M4.50004 1.75H15.5C16.4167 1.75 17.1667 2.5 17.1667 3.41667V5.25C17.1667 5.91667 16.75 6.75 16.3334 7.16667L12.75 10.3333C12.25 10.75 11.9167 11.5833 11.9167 12.25V15.8333C11.9167 16.3333 11.5834 17 11.1667 17.25L10 18C8.91671 18.6667 7.41671 17.9167 7.41671 16.5833V12.1667C7.41671 11.5833 7.08337 10.8333 6.75004 10.4167L3.58337 7.08333C3.16671 6.66667 2.83337 5.91667 2.83337 5.41667V3.5C2.83337 2.5 3.58337 1.75 4.50004 1.75Z"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

  );
}

export default Filter;