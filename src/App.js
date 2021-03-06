import React, { Component } from 'react';
import { Switch , Route ,withRouter,Redirect} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import './App.css';

import Header from './components/layout/header/header';
import Home from './pages/home';
import Themes from './pages/theme';
import Hotels from './pages/hotels';
import Hotel from './pages/hotel';
import WishList from './pages/wishList';
import Ratings from './pages/ratings';
import Footer from './components/layout/footer/footer';

class App extends Component {
  render() {
    library.add(faStroopwafel);
    let routeSwitch= (
      <Switch>
        <Route  path="/theme" component={Themes}/>
        <Route exact path="/hotels" component={Hotels}/>
        <Route  path="/hotel/:id" component={Hotel}/>
        <Route  path="/wishlist" component={WishList}/>
        <Route  path="/ratings" component={Ratings}/>
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
