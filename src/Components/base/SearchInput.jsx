import Search from "../../assets/icons/Search";

const SearchInput = () => {
  return (
    <div className="relative flex">
      <div className="absolute top-1/2 left-4 -translate-y-1/2">
        <Search className="text-black" />
      </div>

      <input
        className="rounded-large border-[2px] border-gray-400 pl-[44px] py-3 pr-3"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchInput;
