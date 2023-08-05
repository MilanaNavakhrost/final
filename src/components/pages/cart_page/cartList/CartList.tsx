import { IBook } from "~/utils/types";
import { CartItem } from "./cartItem/CartItem";
import { useSelector } from "react-redux";
import "./cartList.css";

export const CartList = () => {
  const cartItems = useSelector((state: any) => state.cartReducer.cartItems);

  return (
    <>
      <ul className="cart-list">
        {cartItems.length
          ? cartItems.map((item: IBook, idx: number) => (
              <li key={idx}>
                <CartItem item={item} />
              </li>
            ))
          : 'No items in cart'}
      </ul>
    </>
  );
};
