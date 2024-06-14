import React from 'react';
import Cart from './cart';
import Search from './search';
import SignIn from './signin';
import SignUp from './signup';

function Header() {
  return (
    <div className="Header">
      <div className="LeftAligned"></div>
      <Search />
      <div className="RightAligned">
        <Cart />
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
}

export default Header;