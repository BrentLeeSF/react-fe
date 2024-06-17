import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';
import Header from './components/header';
import SideBar from './components/sidebar';
import HomePage from './components/homepage';
import './App.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Header />
        <div id="Main">
          <SideBar />
          <HomePage />
        </div>
      </Router>
    </Provider>
    </>
  );
}

export default App;
