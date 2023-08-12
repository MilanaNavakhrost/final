import { useEffect, useState } from "react";
import { Search } from "../../../components/search/Search";
import { SubscribeSection } from "../../../components/shared/subscribeSection/SubscribeSection";
import { BooksList } from "./subcomponents/books_list/BooksList";
import { IBook } from "~/utils/types";

export const HomePage = () => {

  const [books, setBooks] = useState<IBook[]>([]);

  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    if (searchStr.length < 2) (async () => {
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
  }, [searchStr]);

  return (
    <>
      <Search searchStr={searchStr} setSearchStr={setSearchStr} setBooks={setBooks} />
      {books && <BooksList books={books} />}
      <SubscribeSection />
    </>
  );
};
