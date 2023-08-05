import { useEffect, useState } from "react";
import { IBook } from "~/utils/types";
import { useNavigate, useParams } from "react-router-dom";
import "./bookPage.css";
import { BookDesc } from "./BookDesc/BookDesc";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { HiArrowLongLeft } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";
import { SubscribeSection } from "../../../components/shared/subscribeSection/SubscribeSection";
import { useDispatch } from "react-redux";
import { addToCart, saveToLocalStorage } from "../../../store/reducers/cartReducer";
import classNames from "classnames";

export const BookPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const [addBtn, setAddBtn] = useState({ isClicked: false });
  const [textBtn, setTextBtn] = useState("Add to cart");

  const [bookInfo, setBookInfo] = useState<IBook>();

  useEffect(() => {
    (async () => {
      const response: IBook = await (
        await fetch(`https://api.itbook.store/1.0/books/${id}`)
      ).json();
      setBookInfo(response);
    })();
  }, [id]);

  const handleButton = () => {
    if (bookInfo) {
      dispatch(addToCart(bookInfo));
      dispatch(saveToLocalStorage());
    }
    setAddBtn({ isClicked: true });
    setTextBtn("Added to cart");
  };

  return (
    <>
      <HiArrowLongLeft className="arrow-icon" onClick={() => navigate("/")} />
      <h1 className="book-title">{bookInfo?.title}</h1>
      <div className="img-desc">
        <div className="book-img">
          <img src={bookInfo?.image} alt="" />
        </div>

        <div className="info">
          <div className="price-rating">
            <h2>{bookInfo?.price}</h2>
            <div className="stars">
              {new Array(5).fill("").map((_, idx) => (
                <AiFillStar
                  className="star-icon"
                  key={idx}
                  color={idx < +(bookInfo?.rating || 0) ? "black" : "lightgray"}
                />
              ))}
            </div>
          </div>

          <div className="authors-group">
            <p className="authors">Authors</p>
            <p>{bookInfo?.authors}</p>
          </div>
          <div className="publisher-group">
            <p className="publisher">Publisher</p>
            <p>{bookInfo?.publisher}</p>
          </div>
          <div className="language-group">
            <p className="language">Language</p>
            <p>{bookInfo?.language}</p>
          </div>

          <button
            className={classNames(
              addBtn.isClicked === true ? "add-to-cart-clicked" : "add-to-cart"
            )}
            onClick={handleButton}
            disabled={addBtn.isClicked}
          >
            {textBtn}
          </button>
        </div>
      </div>

      <BookDesc book={bookInfo} />
      <div className="social-btns-icons">
        <FiFacebook className="social-icons facebook-icon" />
        <FiTwitter className="social-icons twitter-icon" />
        <BsThreeDots className="social-icons dots-icon" />
      </div>

      <SubscribeSection />
    </>
  );
};
