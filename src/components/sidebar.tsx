import React from 'react';
import { listOfCategories } from '../data/listOfCategories';

const displayCategoryList = listOfCategories.map((category, index) => (
  <li key={index}>
    {category.category}
  </li>
));

export default function SideBar() {
  return (
    <div className="SideBar">
      <h2>Test this sidebar!</h2>
      <div>{displayCategoryList}</div>
    </div>
  );
}
