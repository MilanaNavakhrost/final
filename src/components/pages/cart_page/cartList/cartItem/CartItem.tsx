import { IBook } from "~/utils/types";
import "./cartItem.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, saveToLocalStorage } from "../../../../../store/reducers/cartReducer";
import { useState, useEffect } from "react";

export const CartItem = ({ item }: { item: IBook }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [amountItem, setAmountItem] = useState(1);

  useEffect(() => {
    amountItem === 0 && dispatch(removeItem(item.isbn13));
  }, [amountItem]);

  return (
    <div className="cart-item">
      <div
        className="cart-img"
        onClick={() => navigate(`/book/${item.isbn13}`)}
      >
        <img src={item.image} alt="img" />
      </div>
      <div className="cart-text">
        <h2
          className="cart-item-title"
          onClick={() => navigate(`/book/${item.isbn13}`)}
        >
          {item.title}
        </h2>
        <p className="cart-item-author">{item.authors}</p>
        <h2 className="cart-item-price">
          ${+item.price.substring(1, item.price.length) * amountItem}
        </h2>
        <div className="cart-btns-group">
          <button
            className="cart-minus cart-btns"
            onClick={() => setAmountItem(amountItem - 1)}
          >
            -
          </button>
          <p className="cart-count">{amountItem}</p>
          <button
            className="cart-plus cart-btns"
            onClick={() => setAmountItem(amountItem + 1)}
          >
            +
          </button>
        </div>
        <button
          className="cart-remove-item"
          onClick={() => {
            dispatch(removeItem(item.isbn13));
            dispatch(saveToLocalStorage());
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};
