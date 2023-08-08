import { AiOutlineHeart } from "react-icons/ai";
import { IBook } from "~/utils/types";
import "./likedItem.css";
import { useNavigate } from "react-router-dom";
import { LikedButton } from "../../../../../components/shared/LikedButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../store/reducers/cartReducer";
import { removeItem } from "../../../../../store/reducers/likedReducer";

export const LikedItem = ({ item }: { item: IBook }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

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
          <button
            className="liked-item-cart"
            onClick={() => {
              dispatch(addToCart(item));
              setTimeout(() => dispatch(removeItem(item.isbn13)), 0);
            }}
          >
            Move to cart
          </button>
          <LikedButton item={item} />
        </div>
      </div>
    </div>
  );
};
