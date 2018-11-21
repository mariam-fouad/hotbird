import React, { Component } from 'react';
import { Switch , Route ,withRouter,Redirect} from 'react-router-dom'

import './App.css';

import Header from './components/layout/header/header';
import Home from './pages/home';
import Themes from './pages/themes';
import Footer from './components/layout/footer/footer';

class App extends Component {
  render() {

    let routeSwitch= (
      <Switch>
        <Route  path="/theme" component={Themes}/>
        <Route exact path="/" component={Home}/>
        <Redirect to='/'/>
      </Switch>
  );
    return (
      <div className="App">
        <Header/>
        {routeSwitch}
        <Footer/>
      </div>
    );
  }
}

export default withRouter(App);
