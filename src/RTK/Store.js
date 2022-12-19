import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/ProductReducer";
import SearchReducer from "./Reducer/SearchReducer";
export let Store = configureStore({
  reducer: {
    ProductReducer,
    SearchReducer
  }
})
