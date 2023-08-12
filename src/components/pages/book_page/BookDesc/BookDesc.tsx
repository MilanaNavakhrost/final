import { useState } from "react";
import { IBook } from "~/utils/types";
import "./bookDesc.css";
import classNames from "classnames";

const enum ETabsLi {
  DESCRIPTIONS = "1",
  AUTHORS = "2",
  REVIEWS = "3",
}

export const BookDesc = ({ book }: { book?: IBook }) => {
  const [text, setText] = useState("");
  const [active, setActive] = useState<ETabsLi>(ETabsLi.DESCRIPTIONS);

  const handleDesk = () => {
    setText(`${book?.desc}`);
    setActive(ETabsLi.DESCRIPTIONS);
  };
  const handleAuthors = () => {
    setText(`${book?.authors}`);
    setActive(ETabsLi.AUTHORS);
  };
  const handleReviews = () => {
    setText(`${book?.desc}`);
    setActive(ETabsLi.REVIEWS);
  };

  return (
    <div className="desc-section">
      <ul className="info-points">
        <li
          className={classNames({
            "li-active": active === ETabsLi.DESCRIPTIONS,
          })}
          onClick={handleDesk}
        >
          Description
        </li>
        <li
          className={classNames({
            "li-active": active === ETabsLi.AUTHORS,
          })}
          onClick={handleAuthors}
        >
          Authors
        </li>
        <li
          className={classNames({
            "li-active": active === ETabsLi.REVIEWS,
          })}
          onClick={handleReviews}
        >
          Reviews
        </li>
      </ul>
      <div className="">
        <p className="">{text || book?.desc}</p>
      </div>
    </div>
  );
};
