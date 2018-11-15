import React, { Component } from 'react';
import {withRouter} from 'react-router-dom' ;

import './App.css';

import Header from './components/layout/header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default withRouter(App);
