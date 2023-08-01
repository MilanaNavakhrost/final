import { SubscribeSection } from "../../../components/shared/subscribeSection/SubscribeSection";
import { BooksList } from "./subcomponents/books_list/BooksList";

export const HomePage = () => {
  return (
    <>
      <BooksList />
      <SubscribeSection />
    </>
  );
};
