import { useEffect, useState } from "react";
import { IBook } from "~/utils/types";
import { useParams } from "react-router-dom";
import { StarSvg } from "../../shared/StarSvg";
import "./bookPage.scss";

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
      <h1>{bookInfo?.title}</h1>
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
          <div>
            <p>Authors</p>
            <p>{bookInfo?.authors}</p>
          </div>
          <div>
            <p>Publisher</p>
            <p>{bookInfo?.publisher}</p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>

               

    </>
  );
};
