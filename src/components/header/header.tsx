import React from 'react';
import Cart from '../cart/cart';
import Search from '../search/search';
import SignIn from '../signin/signin';
import SignUp from '../signup/signup';
import './header.css';

export default function Header() {
  return (
    <div className="Header">
      <div className="LeftAligned"></div>
      <Search />
      <div className="RightAligned">
        <Cart id={0} />
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}
