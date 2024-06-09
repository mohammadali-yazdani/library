import { useState } from "react";
import { BookList } from "./BookList";
import { FavoriteList } from "./FavoriteList";
import { books } from "../constants/fa/mockData";

import "./Books.scss";

export const Books = () => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="books">
      <BookList books={books} setFavorites={setFavorites} />
      {favorites.length !== 0 && <FavoriteList favorites={favorites} />}
    </div>
  );
};
