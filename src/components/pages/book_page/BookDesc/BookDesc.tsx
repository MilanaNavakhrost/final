import { useState } from "react";
import { IBook } from "~/utils/types";
import "./bookDesc.css";

export const BookDesc = ({ book }: { book?: IBook }) => {
  const [text, setText] = useState("");

  let styleLi = {
    borderBottom: "",
  };

  const handleDesk = () => {
    setText(`${book?.desc}`);
  };
  const handleAuthors = () => {
    setText(`${book?.authors}`);
  };
  const handleReviews = () => {
    setText(`${book?.desc}`);
  };

  return (
    <div className="desc-section">
      <ul className="info-points">
        <li onClick={handleDesk}>
          Description
        </li>
        <li onClick={handleAuthors}>
          Authors
        </li>
        <li onClick={handleReviews}>
          Reviews
        </li>
      </ul>
      <div className="">
        <p className="">{text || book?.desc}</p>
      </div>
    </div>
  );
};
