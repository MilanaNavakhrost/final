import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  addToLiked,
  removeItem,
  saveToLocalStorage,
} from "../../store/reducers/likedReducer";
import { IBook } from "~/utils/types";
import { useMemo } from "react";

interface ILikedButtonProps {
  item: IBook;
}

export const LikedButton = ({ item }: ILikedButtonProps) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cartReducer.cartItems);

  const likedItems = useSelector((state: any) => state.likedReducer.likedItems);

  const isLiked = useMemo<boolean>(
    () => Boolean(likedItems.find((el: IBook) => el.isbn13 === item.isbn13)),
    [likedItems, item]
  );

  return (
    <>
      {!cartItems.find((el: IBook) => el.isbn13 === item.isbn13) && (
        <AiOutlineHeart
          className="book-like-icon"
          style={{ fill: isLiked ? "red" : "" }}
          onClick={() => {
            isLiked
              ? dispatch(removeItem(item.isbn13))
              : dispatch(addToLiked(item));
            dispatch(saveToLocalStorage());
          }}
        />
      )}
    </>
  );
};
