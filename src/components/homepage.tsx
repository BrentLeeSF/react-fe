import React from 'react';
import { listOfProducts } from '../data/listOfProducts';

const displayProductList = listOfProducts.map((product, index) => (
  <li key={index}>
    <div className="product">
      {product.productDiscription}
    </div>
  </li>
));

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="productTitle">
        <h2>Test this home page!</h2>
      </div>
      <div className="productList">
        {displayProductList}
      </div>
    </div>
  );
}
