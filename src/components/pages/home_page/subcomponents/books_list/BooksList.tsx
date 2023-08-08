import { useEffect, useState } from "react";
import "./booksList.css";
import { IBook } from "~/utils/types";
import { BookItem } from "./BookItem/BookItem";

export const BooksList = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    (async () => {
      const response: IBook[] = (
        await (await fetch("https://api.itbook.store/1.0/new")).json()
      ).books;
      setBooks(
        response.map((el) => {
          el.cartAmount = 1;
          return el;
        })
      );
    })();
  }, []);

  return (
    <>
      <h1 className="list-name">New releases books</h1>
      <ul className="books-list">
        {books.map((item, idx) => (
          <BookItem item={item} key={idx} />
        ))}
      </ul>
    </>
  );
};
