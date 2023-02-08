import { configureStore } from "@reduxjs/toolkit";
import CreateStore from "./CreateProducts";
import useReducer from "./userSlice";

const store = configureStore({
  reducer: { product: CreateStore, user: useReducer },
});

export default store;
