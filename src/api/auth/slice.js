import { createSlice } from "@reduxjs/toolkit";
import { deleteUserAction, getUserListAction, signinAction, signupAction } from "./action";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signupAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    });
    builder.addCase(signupAction.rejected, (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    });
    builder.addCase(signinAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signinAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    });
    builder.addCase(signinAction.rejected, (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    });
  },
});

export const listUserSlice = createSlice({
  name: "ListUserSlice",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserListAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserListAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    });
    builder.addCase(getUserListAction.rejected, (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    });
  },
});

export const deleteUserSlice = createSlice({
  name: "deleteUserSlice",
  initialState: {
    data: {},
    loading: false,
    isSuccess: false,
    message: null,
  },
  reducers: {
    stateReset(state, action) {
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUserAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUserAction.fulfilled, (state, { payload }) => {
      state.message = "Product Deleted";
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    });
    builder.addCase(deleteUserAction.rejected, (state) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    });
  },
});


export const deleteUserResetAction = deleteUserSlice.actions;
