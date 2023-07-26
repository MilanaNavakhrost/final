import "./header.css";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h2 className="header-logo" onClick={() => navigate("/")}>
        BookStore
      </h2>
      <div className="input-box">
        <input type="text" className="header-input" placeholder="Search" />
        <BiSearch className="header-icons search-icon" />
      </div>
      <div className="header-btns-icons">
        <AiOutlineHeart className="header-icons heart-icon" />
        <AiOutlineShoppingCart
          className="header-icons cart-icon"
          onClick={() => navigate("/cart")}
        />
        <AiOutlineUser className="header-icons user-icon" />
      </div>
    </header>
  );
};
