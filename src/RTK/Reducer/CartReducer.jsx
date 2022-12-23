import { createSlice } from "@reduxjs/toolkit";

let initState = {
  cart: []

};
let cartReducer = createSlice({

  name: 'cart',
  initialState: initState,
  reducers: {
    CartAction: (state, action) => {
      // console.log(action.payload)
      let findProduct = state.cart.find((el) => el.id === action.payload.id)
      if (findProduct) {
        findProduct.productCount += 1
      }
      else {
        state.cart.push({ ...action.payload, productCount: 1 });
      }

    }

  }

})
export default cartReducer.reducer

export let { CartAction } = cartReducer.actions;