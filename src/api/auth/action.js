import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../Instance";

//thunk
export const signupAction = createAsyncThunk(
  "signupAction",
  async (object, { rejectWithValue }) => {
    try {
      const { name, email, password } = object;

      const { data } = await instance.post("/products", {
        name,
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signinAction = createAsyncThunk(
  "signinAction",
  async (object, { rejectWithValue }) => {
    try {
      const { email, password } = object;

      const { data } = await instance.post("/products", {
        email,
        password,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserAction = createAsyncThunk(
  "deleteUserAction",
  async (object, { rejectWithValue }) => {
    try {
      const { id } = object;
      const { data } = await instance.delete(`/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserListAction = createAsyncThunk(
  "getUserListAction",
  async (object, { getState, rejectWithValue }) => {
    try {
      const { data } = await instance.get("/products?limit=4");
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
