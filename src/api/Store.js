import { configureStore } from "@reduxjs/toolkit";
import { userInfoSlice } from "./auth/slice";

const store = configureStore({
  reducer: {
    userInfo: userInfoSlice.reducer,
  },
});

export default store;
