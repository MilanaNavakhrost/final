import "./header.css";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useEffect } from "react";
import { setCartItems } from "../../../store/reducers/cartReducer";
import { setLikedItems } from "../../../store/reducers/likedReducer";

export const Header = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state: any) => state.cartReducer.cartItems);

  const likedItems = useSelector((state: any) => state.likedReducer.likedItems);

  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageCartData = localStorage.getItem("cartItems");
    const localStorageLikedData = localStorage.getItem("likedItems");

    if (localStorageCartData) {
      dispatch(setCartItems(JSON.parse(localStorageCartData) || []));
    }

    if (localStorageLikedData) {
      dispatch(setLikedItems(JSON.parse(localStorageLikedData) || []));
    }
  }, []);

  return (
    <header>
      <h2 className="header-logo" onClick={() => navigate("/")}>
        BookStore
      </h2>
      <div className="header-btns-icons">
        <div className="header-liked-group">
          <AiOutlineHeart
            className="header-icons heart-icon"
            onClick={() => navigate("/liked")}
          />
          <div
            className={classNames(
              likedItems.length > 0 && "circle-liked-items"
            )}
          >
            {likedItems.length > 0 ? likedItems.length : ""}
          </div>
        </div>

        <div className="header-cart-group">
          <AiOutlineShoppingCart
            className="header-icons cart-icon"
            onClick={() => navigate("/cart")}
          />
          <div
            className={classNames(cartItems.length > 0 && "circle-cart-items")}
          >
            {cartItems.length > 0 ? cartItems.length : ""}
          </div>
        </div>

        <AiOutlineUser className="header-icons user-icon" />
      </div>
    </header>
  );
};
