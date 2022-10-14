import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { userInfoReducer } from "./Slices";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

setupListeners(store.dispatch);
