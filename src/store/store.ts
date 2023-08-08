import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { likedReducer } from "./reducers/likedReducer";

export const store = configureStore({
  reducer: {
    cartReducer,
    likedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
