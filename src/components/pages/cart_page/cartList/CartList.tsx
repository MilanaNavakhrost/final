import { IBook } from "~/utils/types";
import { CartItem } from "./cartItem/CartItem";
import { useSelector } from "react-redux";
import "./cartList.css";

export const CartList = () => {
  const cartItems = useSelector((state: any) => state.cartReducer.cartItems);

  return (
    <>
      <ul className="cart-list">
        {cartItems.map((item: IBook) => (
          <li>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
