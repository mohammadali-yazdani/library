import { useState } from "react";
import { Heart } from "react-feather";
import "./BookItem.scss";

export const BookItem = ({ book, setFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorites = () => {
    setIsFavorite((isFavorite) => !isFavorite);

    setFavorites((prevFavorites) => {
      if (isFavorite) {
        return prevFavorites.filter((favorite) => favorite.id !== book.id);
      }
      return [...prevFavorites, book];
    });
  };

  return (
    <li className={`book-item ${isFavorite ? "favorite" : ""}`}>
      <img
        className="book-item-image"
        src={`/src/assets/${book.image}`}
        alt=""
      />
      <div className="book-item-content">
        <h5 className="book-item-content--title">{book.title}</h5>
        <p className="book-item-content--description">{book.author}</p>

        <button className="book-item-content--heart" onClick={handleFavorites}>
          <Heart />
        </button>
      </div>
    </li>
  );
};
