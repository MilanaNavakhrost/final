import { useEffect, useState } from "react";
import { IBook } from "~/utils/types";
import { useParams } from "react-router-dom";
import { StarSvg } from "../../shared/icons/StarSvg";
import "./bookPage.css";

export const BookPage = () => {
  const { id } = useParams();

  const [bookInfo, setBookInfo] = useState<IBook>();

  useEffect(() => {
    (async () => {
      const response: IBook = await (
        await fetch(`https://api.itbook.store/1.0/books/${id}`)
      ).json();
      setBookInfo(response);
    })();
  }, [id]);

  return (
    <>
      <button className="arrow">arrow</button>
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
                <StarSvg
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
            <p>English</p>
          </div>

          <button className="add-to-cart">Add to cart</button>
        </div>
      </div>

               

    </>
  );
};
