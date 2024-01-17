import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchGoods = createAsyncThunk(
  "goods/fetchGoods",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL}api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch goods");
    }

    const data = await response.json();
    return data;
  },
);

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.data = [];
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
