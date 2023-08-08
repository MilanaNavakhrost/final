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

    removeItem: (state, action) => {},

    moveToCart: (state, action) => {},
  },
});

export const {
   addToLiked,
 } = likedSlice.actions;
 export const likedReducer = likedSlice.reducer;