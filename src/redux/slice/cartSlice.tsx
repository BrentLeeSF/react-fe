
import { createSlice } from '@reduxjs/toolkit'

interface ProductItem {
  id: number,
  currentProductId: number,
  productCountValue: number
}

interface ProductsInCartState {
  loading: boolean
  todos: ProductItem[]
}

let currentIndex: number = 0;
let currentProductCount: number = 0;

const cartSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: [],
  } satisfies ProductsInCartState as ProductsInCartState,
  reducers: (create) => ({
    deleteProductFromCart: create.reducer<number>((state, action) => {
      currentProductCount -= 1;
      
      const allToSave = state.todos.filter((test) => {
        return test.id != action.payload;
      });
      state.todos = allToSave;
    }),
    addProductToCart: create.preparedReducer(
      (currentProductId: number, productCountValue: number) => {
        const id = currentIndex;
        currentIndex += 1;
        currentProductCount += 1;
        productCountValue = currentProductCount;
        
        return { payload: { id, currentProductId, productCountValue } }
      },
      // action type is inferred from prepare callback
      (state, action: any) => {
        //console.log('PAYLOAD = ',payload)
        console.log('payload previous = ',action.payload);
        state.todos.push(action.payload)
        console.log('payload LATER = ',action.payload);
      }
    )
  }),
})

// Action creators are generated for each case reducer function
export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;

export default cartSlice.reducer