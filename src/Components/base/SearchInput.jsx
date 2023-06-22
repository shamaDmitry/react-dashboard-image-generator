import classNames from "classnames";
import DynamicIcon from "../../assets/icons/_DynamicIcon";

const SearchInput = ({ darkMode }) => {
  return (
    <div className="relative flex">
      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <DynamicIcon
          name="search"
          className={classNames("text-black", {
            "text-gray-300": darkMode
          })}
        />
      </div>

      <input
        className={classNames("rounded-large border-[2px] border-gray-400 pl-[44px] py-3 pr-3", {
          "text-white bg-transparent border-gray-700": darkMode
        })}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchInput;
