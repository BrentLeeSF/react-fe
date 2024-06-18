import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProductToCart, deleteProductFromCart } from '../redux/slice/cartSlice';

export const Counter = (props: any) => {

  const productCountValue = useSelector((state: any) => state.productCountValue);
  const currentProductId = useSelector((state: any) => state.currentProductId);

  const dispatch = useDispatch();
  
  console.log('Counter = ',productCountValue,', id = ',props.productId);

  return (
    <div>
      <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(addProductToCart(props.productId, productCountValue))}
          >
            +
          </button>
          <span>{productCountValue}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(deleteProductFromCart(props.productId))}
          >
            -
          </button>
      </div>
      <div>index = {props.productId}</div>
    </div>
  )
}