import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, deleteProduct } from '../../redux/slice/cartSlice';

export const Counter = (props: any) => {

  const productCountValue = useSelector((state: any) => state.productCountValue);
  const currentProductId = useSelector((state: any) => state.currentProductId);
  const cartProducts = useSelector((state: any) => state.cartProducts);

  const dispatch = useDispatch();

  /*const cartList = cartProducts && cartProducts.map((cartProd: any, index: number) => (
    <li key={index}>
      <div>{cartProd.id}, {cartProd.productId}</div>
    </li>
  ));*/

  return (
    <div>
      <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(addProduct(props))}
          >
            +
          </button>
          <span>{productCountValue}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(deleteProduct(props))}
          >
            -
          </button>
      </div>
    </div>
  )
}