import { useSelector } from "react-redux";
import { LikedItem } from "./likedItem/LikedItem";
import { IBook } from "~/utils/types";
import "./likedList.css";

export const LikedList = () => {
  const likedItems = useSelector((state: any) => state.likedReducer.likedItems);

  return (
    <>
      <ul className="liked-list">
        {likedItems.length ? (
          likedItems.map((item: IBook, idx: number) => (
            <li key={idx}>
              <LikedItem item={item} />
            </li>
          ))
        ) : (
          <h2 className="liked-default-text">No items are liked</h2>
        )}
      </ul>
    </>
  );
};
