import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "~/utils/types";

interface IState {
   cartItems: IBook[],
}

const initialState: IState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IBook>) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
