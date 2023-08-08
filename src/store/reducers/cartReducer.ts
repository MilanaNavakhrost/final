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
      const itemId = state.cartItems.findIndex(
        (el: IBook) => el.isbn13 === action.payload.isbn13
      );
      state.cartItems[itemId].cartAmount = 1;
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
      const itemId = state.cartItems.findIndex(
        (el: IBook) => el.isbn13 === action.payload
      );
      state.cartItems[itemId].cartAmount
        ? (state.cartItems[itemId].cartAmount += 1)
        : (state.cartItems[itemId].cartAmount = 1);
    },

    minusItemAmount: (state, action: PayloadAction<number>) => {
      const itemId = state.cartItems.findIndex(
        (el: IBook) => el.isbn13 === action.payload
      );
      state.cartItems[itemId].cartAmount
        ? (state.cartItems[itemId].cartAmount -= 1)
        : (state.cartItems[itemId].cartAmount = 1);
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
