import { useState } from "react";
import { IBook } from "~/utils/types";
import "./bookItem.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToLiked } from "../../../../../../store/reducers/likedReducer";

export const BookItem = ({ item }: { item: IBook }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <li key={item.isbn13}>
      <div
        className="home-book-img"
        onClick={() => navigate(`/book/${item.isbn13}`)}
      >
        <img src={item.image} alt="img" />
      </div>
      <h3 className="book-name">{item.title}</h3>
      <p className="book-subtitle">{item.subtitle || "-"}</p>
      <div className="book-price-like">
        <h3 className="book-price">{item.price}</h3>
        <AiOutlineHeart
          className="book-like-icon heart-icon"
          onClick={() => dispatch(addToLiked(item))}
        />
      </div>
    </li>
  );
};
