import "./header.css";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useEffect } from "react";
import { setCartItems } from "../../../store/reducers/cartReducer";

export const Header = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state: any) => state.cartReducer.cartItems);
  
  const likedItems = useSelector((state: any) => state.likedReducer.likedItems);

  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageData = localStorage.getItem("cartItems");
    if (localStorageData) {
      dispatch(setCartItems(JSON.parse(localStorageData) || []));
    }
  }, []);

  return (
    <header>
      <h2 className="header-logo" onClick={() => navigate("/")}>
        BookStore
      </h2>
      <div className="header-input-box">
        <input type="text" className="header-input" placeholder="Search" />
        <BiSearch className="header-icons search-icon" />
      </div>
      <div className="header-btns-icons">

        <div className="header-liked-group">
          <AiOutlineHeart
            className="header-icons heart-icon"
            onClick={() => navigate("/liked")}
          />
          <div
            className={classNames(likedItems.length > 0 && "circle-liked-items")}
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
