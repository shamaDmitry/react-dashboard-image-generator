import classNames from 'classnames';

const Button = ({ type = "primary", label, icon, fullWidth, onClick, className = "", darkMode }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(`${className} inline-flex items-center gap-[10px] justify-center rounded-[12px] py-3 px-4`, {
        "text-white bg-blue-600 hover:bg-blue-800": type === "primary",
        "text-gray-500 bg-transparent border-2 border-gray-400": type === "hollow",
        "text-white border-gray-700": type === "hollow" && darkMode,
        "w-full": fullWidth,
      })}
    >
      {icon && <span className="">{icon}</span>}
      {label && <span>{label}</span>}
    </button>
  );
}

export default Button;
