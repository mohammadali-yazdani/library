import { Search } from "react-feather";

import "./SearchBar.scss";

export const SearchBar = ({
  searchTerm,
  setSearchTerm,
  hasSearch,
  onReset,
  onSearch,
}) => {
  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="search-bar">
      <label htmlFor="library-search" className="search-bar-label">
        جستجو
      </label>
      <div className="search-bar-box">
        <div className="search-bar-box--icon">
          <Search />
        </div>
        <input
          type="search"
          id="library-search"
          className="search-bar-box--input"
          placeholder="جستجوی کتاب..."
          value={searchTerm}
          onChange={searchChangeHandler}
          required
        />
        <div className="search-bar-box--buttons">
          {hasSearch && (
            <button
              type="button"
              className="search-bar-box--buttons--cancel"
              onClick={onReset}
            >
              لغو جستجو
            </button>
          )}
          <button
            type="submit"
            className="search-bar-box--buttons--submit"
            onClick={onSearch}
          >
            جستجو
          </button>
        </div>
      </div>
    </form>
  );
};
