import "./header.scss";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h2 className="header__logo" onClick={() => navigate("/")}>
        BookStore
      </h2>
      <input type="text" className="header__input" placeholder="Search" />
      <div className="header__btns">
        <button>postponed</button>
        <button>cart</button>
        <button>authorization</button>
      </div>
    </header>
  );
};
