import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  products: [],
  loading: false,
  cart: [],
  favorite: [],
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://6383d6234ce192ac604bbc34.mockapi.io/items"
    );
    return response.data;
  }
);
export const fetchCart = createAsyncThunk("product/fetchCart", async () => {
  const response = await axios.get(
    "https://6383d6234ce192ac604bbc34.mockapi.io/cart"
  );
  return response.data;
});

export const fetchFavorites = createAsyncThunk(
  "product/fetchFavorites",
  async () => {
    const response = await axios.get(
      "https://6383d6234ce192ac604bbc34.mockapi.io/favorites"
    );
    return response.data;
  }
);

const createStore = createSlice({
  name: "Product",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;

      console.log(state.products);
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
    },
    [fetchCart.pending]: (state) => {
      state.loading = true;
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    },
    [fetchCart.rejected]: (state) => {
      state.loading = false;
    },
    [fetchFavorites.pending]: (state) => {
      state.loading = true;
    },
    [fetchFavorites.fulfilled]: (state, action) => {
      state.loading = false;
      state.favorite = action.payload;
    },
    [fetchFavorites.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const {} = createStore.actions;
export default createStore.reducer;
