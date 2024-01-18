import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import goodsReducer from "./goods/goods.slice";
import { apiTokenErrorMiddleware } from "./midleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    goods: goodsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
