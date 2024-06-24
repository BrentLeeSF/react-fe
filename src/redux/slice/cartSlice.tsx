
import { createSlice } from '@reduxjs/toolkit'

let index: number = 0;
const cartSlice = createSlice({
  name: "cartProducts",
  initialState: [],
  reducers: {
    addProduct: (state: any, action) => {
      const newProduct: any = {
        id: index,
        productId: action.payload.product.id
      };
      state.push(newProduct);
      index++;
    },
    deleteProduct: (state: any, action: any) => {
      const index = state.findIndex((newProduct: any) => newProduct.productId === action.payload.product.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});
export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;