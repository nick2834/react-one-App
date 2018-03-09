import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import '../assets/stylus/reset.styl';
import './App.styl';

import Tabbar from './tabbar/tabbar'


import HomePage from './home/home'
import BookPage from './books/books'
import MusicPage from './musics/musics'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="container">
            <Switch>
              <Route exact path='/home' component={HomePage}/>
              <Route path='/books' component={BookPage}/>
              <Route path='/musics' component={MusicPage}/>
              <Redirect to='/home'/>
            </Switch>
          </div>
          <Tabbar/>
        </div>
      </Router>
    );
  }
  componentDidMount(){
  }
}

export default App;
