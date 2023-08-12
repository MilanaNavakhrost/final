import { useEffect, useState } from "react";
import "./booksList.css";
import { IBook } from "~/utils/types";
import { BookItem } from "./BookItem/BookItem";

export const BooksList = ({ books }: { books: IBook[] }) => {
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
