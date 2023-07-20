import { useEffect, useState } from "react";
// import "./bookList.scss";

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
          <li key={item.isbn13}>
            <img src={item.image} alt="img" />
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <h3>{item.price}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};
