import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { BookList } from "./BookList";
import { FavoriteList } from "./FavoriteList";
import { books } from "../constants/fa/mockData";

import "./Books.scss";

export const Books = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [hasSearch, setHasSearch] = useState(false);

  const handleSearchClick = (event) => {
    event.preventDefault();
    const filtered = books.filter(
      (book) =>
        book.title.includes(searchTerm) || book.author.includes(searchTerm)
    );

    setFilteredBooks(filtered);
    setHasSearch(searchTerm.trim() !== "" ? true : false);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
    setFilteredBooks(books);
    setHasSearch(false);
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        hasSearch={hasSearch}
        onSearch={handleSearchClick}
        onReset={handleResetSearch}
      />
      <div className="books">
        <BookList books={filteredBooks} setFavorites={setFavorites} />
        {favorites.length !== 0 && <FavoriteList favorites={favorites} />}
      </div>
    </>
  );
};
