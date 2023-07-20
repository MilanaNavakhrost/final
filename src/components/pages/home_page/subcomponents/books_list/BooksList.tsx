import { useEffect, useState } from "react";
import "./booksList.scss";
import { IBook } from "~/utils/types";
import { BookItem } from "./BookItem/BookItem";

export const BooksList = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    (async () => {
      const response: IBook[] = (
        await (await fetch("https://api.itbook.store/1.0/new")).json()
      ).books;
      setBooks(response);
    })();
  }, []);

  return (
    <>
      <h1>New releases books</h1>
      <ul>
        {books.map((item) => (
          <BookItem item={item} />
        ))}
      </ul>
    </>
  );
};
