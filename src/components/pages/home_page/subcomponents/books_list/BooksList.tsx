import { useEffect, useState } from "react";

interface IBook {
  title: string;
  subtitle: string;
  isbn13: number;
  price: number;
  image: string;
  url: string;
}

export const BooksList = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    (async () => {
      const response: IBook[] = (await(
        await fetch("https://api.itbook.store/1.0/new")
      ).json()).books;
      setBooks(response);
    })();
  }, []);

  return (
    <>
      <h1>New releases books</h1>
      <ul>
        {books.map((item) => (
          <li key={item.isbn13}>
            <h3>{item.title}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};
