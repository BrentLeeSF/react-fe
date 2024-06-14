import React from 'react';
import Header from './components/header';
import SideBar from './components/sidebar';
import HomePage from './components/homepage';
import './App.css';

/* CSS
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://css-tricks.com/snippets/css/complete-guide-grid/
Sizing items - https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS
@Media (for mobile) - https://www.w3schools.com/cssref/css3_pr_mediaquery.php
*/

function App() {
  return (
    <>
      <Header />
      <div id="Main">
        <SideBar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
