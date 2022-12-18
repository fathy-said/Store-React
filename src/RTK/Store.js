import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Reducer/ProductReducer";
export let Store = configureStore({
  reducer: {
    ProductReducer,
  }
})
