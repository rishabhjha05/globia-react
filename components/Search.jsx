const Search = ({ setQuery }) => {
  return (
    <div
      id="search-input"
      onClick={(e) => {
        e.stopPropagation();
        document.querySelector('#search-input-field').focus();
      }}
    >
      <span className="material-symbols-outlined">
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <input
        type="text"
        id="search-input-field"
        placeholder="Search for a country..."
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
};
export default Search;
