import "./SearchBar.scss";

import { Search } from "react-feather";

export const SearchBar = () => {
  return (
    <div className="search-bar">
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
          required
        />
        <button type="submit" className="search-bar-box--button">
          جستجو
        </button>
      </div>
    </div>
  );
};
