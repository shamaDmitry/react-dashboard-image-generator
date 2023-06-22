import classNames from "classnames";

const Stats = ({ icon, count, darkMode }) => {
  return (
    <div className="flex items-center gap-[4px]">
      {icon}
      <span className={classNames("text-stats", {
        "text-gray-500": !darkMode,
        "text-gray-400": darkMode,
      })}>
        {count}
      </span>
    </div>
  );
}

export default Stats;
