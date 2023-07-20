import { IBook } from "~/utils/types";
import "./bookItem.scss";
import { useNavigate } from "react-router-dom";

export const BookItem = ({ item }: { item: IBook }) => {
  const navigate = useNavigate();

  return (
    <li key={item.isbn13} onClick={() => navigate(`/book/${item.isbn13}`)}>
      <img src={item.image} alt="img" />
      <h2>{item.title}</h2>
      <p>{item.subtitle}</p>
      <h3>{item.price}</h3>
    </li>
  );
};
