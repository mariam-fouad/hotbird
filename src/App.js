import React, { Component } from 'react';
import {withRouter} from 'react-router-dom' ;

import './App.css';

import Header from './components/layout/header/header';
import Home from './pages/home';
import Footer from './components/layout/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
