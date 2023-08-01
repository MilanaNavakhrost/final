import { IBook } from "~/utils/types";
import "./cartItem.css";

export const CartItem = ({ item }: { item: IBook }) => {
  return (
      <div className="cart-item">
        <div className="cart-img">
          <img src={item.image} alt="img" />
        </div>
        <div className="cart-text">
          <h2 className="cart-item-title">{item.title}</h2>
          <p className="cart-item-author">{item.authors}</p>
          <h2 className="cart-item-price">{item.price}</h2>
          <div className="cart-btns-group">
            <button className="cart-minus cart-btns">-</button>
            <p className="cart-count">1019</p>
            <button className="cart-plus cart-btns">+</button>
          </div>
        </div>
      </div>
  );
};
