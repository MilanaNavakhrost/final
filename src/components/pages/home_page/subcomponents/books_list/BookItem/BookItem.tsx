import { useState } from "react";
import { IBook } from "~/utils/types";
import "./bookItem.css";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export const BookItem = ({ item }: { item: IBook }) => {
  const navigate = useNavigate();

  return (
    <li key={item.isbn13} onClick={() => navigate(`/book/${item.isbn13}`)}>
      <div className="home-book-img">
        <img src={item.image} alt="img" />
      </div>
      <h3 className="book-name">{item.title}</h3>
      <p className="book-subtitle">{item.subtitle || "-"}</p>
      <div className="price-stars">
        <h3>{item.price}</h3>
        <div className="stars">
          {new Array(5).fill("").map((_, idx) => (
            <AiFillStar
              className="star-icon"
              key={idx}
              color={idx < +(item.rating || 0) ? "black" : "lightgray"} //не работает ??  нужен запрос
            />
          ))}
        </div>
      </div>
    </li>
  );
};
