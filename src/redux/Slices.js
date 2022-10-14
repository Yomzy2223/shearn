import { createSlice } from "@reduxjs/toolkit";

const userInfo = createSlice({
  name: "User Info",
  initialState: {
    authInfo: {},
  },
  reducers: {
    setAuthInfo: (state, action) => {
      state.authInfo = action.payload;
    },
  },
});

export const userInfoReducer = userInfo.reducer;

export const { setAuthInfo } = userInfo.actions;
