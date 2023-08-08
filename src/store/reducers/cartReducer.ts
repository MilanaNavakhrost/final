import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "~/utils/types";

export interface IState {
  cartItems: IBook[];
  cartItemAmount: number;
}

const initialState: IState = {
  cartItems: [],
  cartItemAmount: 1,
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

    plusItemAmount: (state, action: PayloadAction<number>) => {
      // state.cartItemAmount === action.payload;
      action.payload += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    minusItemAmount: (state, action: PayloadAction<number>) => {
      // state.cartItemAmount === action.payload;
      action.payload += 1;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeItem,
  saveToLocalStorage,
  setCartItems,
  plusItemAmount,
  minusItemAmount,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
