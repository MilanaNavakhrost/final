import { IBook } from "~/utils/types";
import "./bookItem.css";
import { useNavigate } from "react-router-dom";
import { LikedButton } from "../../../../../../components/shared/LikedButton";

export const BookItem = ({ item }: { item: IBook }) => {
  const navigate = useNavigate();
  return (
    <li key={item.isbn13}>
      <div
        className="home-book-img"
        onClick={() => navigate(`/book/${item.isbn13}`)}
      >
        <img src={item.image} alt="img" />
      </div>
      <h3 className="book-name">{item.title}</h3>
      <p className="book-subtitle">{item.subtitle || "-"}</p>
      <div className="book-price-like">
        <h3 className="book-price">{item.price}</h3>
        <LikedButton item={item} />
      </div>
    </li>
  );
};
