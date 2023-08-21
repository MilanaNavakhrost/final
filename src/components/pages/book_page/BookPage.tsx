import { useEffect, useState } from "react";
import { IBook } from "~/utils/types";
import { useNavigate, useParams } from "react-router-dom";
import "./bookPage.css";
import { BookDesc } from "./BookDesc/BookDesc";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { HiArrowLongLeft } from "react-icons/hi2";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { SubscribeSection } from "../../../components/shared/subscribeSection/SubscribeSection";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  saveToLocalStorage,
} from "../../../store/reducers/cartReducer";
import classNames from "classnames";

export const BookPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  const cartItems = useSelector((state: any) => state.cartReducer.cartItems);

  const [heart, setHeart] = useState({ isRed: false });

  const [bookInfo, setBookInfo] = useState<IBook>();

  useEffect(() => {
    (async () => {
      const response: IBook = await (
        await fetch(`https://api.itbook.store/1.0/books/${id}`)
      ).json();
      setBookInfo(() => {
        response.cartAmount = 1;
        return response;
      });
    })();
  }, [id]);

  const handleButton = () => {
    if (bookInfo) {
      dispatch(addToCart(bookInfo));
      dispatch(saveToLocalStorage());
    }
  };

  return (
    <>
      <HiArrowLongLeft className="arrow-icon" onClick={() => navigate("/home")} />
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

          <div className="authors-group names-attributes-group">
            <p className="authors names">Authors</p>
            <p className="attributes">{bookInfo?.authors}</p>
          </div>
          <div className="publisher-group names-attributes-group">
            <p className="publisher names">Publisher</p>
            <p className="attributes">{bookInfo?.publisher}</p>
          </div>
          <div className="language-group names-attributes-group">
            <p className="language names">Language</p>
            <p className="attributes">{bookInfo?.language}</p>
          </div>
          <div className="pages-group names-attributes-group">
            <p className="pages names">Pages</p>
            <p className="attributes">{bookInfo?.pages}</p>
          </div>
          <div className="year-group names-attributes-group">
            <p className="year names">Year</p>
            <p className="attributes">{bookInfo?.year}</p>
          </div>

          <button
            className="add-to-cart"
            onClick={handleButton}
            disabled={cartItems.find(
              (el: IBook) => el.isbn13 === bookInfo?.isbn13
            )}
          >
            {cartItems.find((el: IBook) => el.isbn13 === bookInfo?.isbn13)
              ? "Added to cart"
              : "Add to cart"}
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
