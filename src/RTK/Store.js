import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/ProductReducer";
import SearchReducer from "./Reducer/SearchReducer";
import CategoryReducer from "./Reducer/CategoryReducer";
export let Store = configureStore({
  reducer: {
    ProductReducer,
    SearchReducer,
    CategoryReducer,
  }
})
