import React from 'react';
import { Counter } from '../cartCounter/counter';

export default function Cart(props: any) {
  return (
    <div className="Cart">
        Cart <Counter id={props.id} />
    </div>
  );
}