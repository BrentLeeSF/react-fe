import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slice/counterSlice';

export const Counter = (props: any) => {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
      </div>
      <div>index = {props.counter}</div>
    </div>
  )
}