import React from 'react';
import { listOfCategories } from '../data/listOfCategories';

const displayCategoryList = listOfCategories.map((category, index) => (
  <li key={index}>
    {category.category}
  </li>
));

function SideBar() {
  return (
    <div className="SideBar">
      <h2>Test this sidebar!</h2>
      <div>{displayCategoryList}</div>
    </div>
  );
}

export default SideBar;