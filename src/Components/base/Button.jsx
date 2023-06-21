import classNames from 'classnames';

const Button = ({ type = "primary", label, icon, fullWidth, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(`${className} flex items-center gap-[10px] justify-center rounded-[12px] py-3 px-4 min-w-[240px] `, {
        "text-white bg-blue-600 hover:bg-blue-800": type === "primary",
        "w-full": fullWidth,
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
