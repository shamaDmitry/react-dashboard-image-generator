const Heart = (props) => {
  return (
    <svg
      {...props}
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_446_1350)">
        <path
          d="M9 15C7.0425 14.34 2.25 11.4375 2.25 6.75C2.25 4.68 3.93 3 6 3C7.23 3 8.3175 3.5925 9 4.5C9.6825 3.585 10.7775 3 12 3C14.07 3 15.75 4.6725 15.75 6.75C15.75 11.445 10.9575 14.34 9 15Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_446_1350">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
}

export default Heart;
