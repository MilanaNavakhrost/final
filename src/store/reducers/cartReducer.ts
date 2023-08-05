import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "~/utils/types";

export interface IState {
  cartItems: IBook[];
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
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = state.cartItems.findIndex(
        (el: IBook) => el.isbn13 === action.payload
      );
      state.cartItems.splice(itemId, 1);
    },
    saveToLocalStorage: (state) => {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    setCartItems: (state, action: PayloadAction<IBook[]>) => {
      state.cartItems = action.payload;
    },
  },
});

export const { addToCart, removeItem, saveToLocalStorage, setCartItems } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
