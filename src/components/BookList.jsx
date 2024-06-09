import { BookItem } from "./BookItem";

import "./BookList.scss";

export const BookList = ({ books, setFavorites }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} setFavorites={setFavorites} />
      ))}
    </ul>
  );
};
