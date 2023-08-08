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
          : <h2 className="cart-default-text">No items in cart</h2>}
      </ul>
    </>
  );
};
