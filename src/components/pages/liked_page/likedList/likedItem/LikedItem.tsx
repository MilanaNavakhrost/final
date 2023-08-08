import { AiOutlineHeart } from "react-icons/ai";
import { IBook } from "~/utils/types";
import "./likedItem.css";
import { useNavigate } from "react-router-dom";

export const LikedItem = ({ item }: { item: IBook }) => {
  const navigate = useNavigate();

  return (
    <div className="liked-item">
      <div
        className="liked-item-img"
        onClick={() => navigate(`/book/${item.isbn13}`)}
      >
        <img src={item.image} alt="img" />
      </div>
      <div className="liked-item-text">
        <h2
          className="liked-item-title"
          onClick={() => navigate(`/book/${item.isbn13}`)}
        >
          {item.title}
        </h2>
        <p className="liked-item-author">{item.authors}</p>
        <h2 className="liked-item-price">{item.price}</h2>
        <div className="liked-item-btns">
          <button className="liked-item-cart">Move to cart</button>
          <AiOutlineHeart className="liked-item-icon heart-icon" />
        </div>
      </div>
    </div>
  );
};
