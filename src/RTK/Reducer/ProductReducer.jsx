import { createSlice } from "@reduxjs/toolkit";
import { ProductThunk } from "../Thunk/ProductThunk";
let initState = {
  products: [],
}
let ProductReducer = createSlice({
  name: 'AllProduct',
  initialState: initState,
  reducers: {



  },
  extraReducers: (builder) => {
    builder
      .addCase(ProductThunk.pending, (state, action) => {

        console.log("loading");

      })
      .addCase(ProductThunk.fulfilled, (state, action) => {

        state.products = action.payload.data.products
      })
      .addCase(ProductThunk.rejected, (state, action) => {

        console.log('rejected');
      })

  }

})

export default ProductReducer.reducer

