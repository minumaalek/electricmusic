import { useSearchParams } from "..";
function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="w-full">
      <input
        autoFocus
        type="text"
        className="w-full bg-transparent border-none"
        placeholder="Search..."
        value={searchParams.get("search") || ""}
        onChange={(event) => {
          let search = event.target.value;
          if (search) setSearchParams({ search });
          else setSearchParams({});
        }}
      />
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowBar(false);
        }}
      ></div>
    </div>
  );
}

export default SearchBar;
