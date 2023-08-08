import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "~/utils/types";

export interface ILikedState {
  likedItems: IBook[];
}

const initialState: ILikedState = {
  likedItems: [],
};

export const likedSlice = createSlice({
  name: "likedItems",
  initialState,
  reducers: {
    addToLiked: (state, action: PayloadAction<IBook>) => {
      state.likedItems.push(action.payload);
    },

    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = state.likedItems.findIndex(
        (el: IBook) => el.isbn13 === action.payload
      );
      state.likedItems.splice(itemId, 1);
    },

    setLikedItems: (state, action: PayloadAction<IBook[]>) => {
      state.likedItems = action.payload;
    },

    saveToLocalStorage: (state) => {
      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
  },
});

export const { addToLiked, removeItem, saveToLocalStorage, setLikedItems } =
  likedSlice.actions;
export const likedReducer = likedSlice.reducer;
