import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import '../assets/stylus/reset.styl';
import './App.styl';

import Tabbar from './tabbar/tabbar'

import HomePage from './home/home'
import BookPage from './books/books'
import MusicPage from './musics/musics'
import MoviePage from './movie/movie'
import ReadDetail from './readDetail/readDetail'

class App extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  
  render() {
    return (
      <Router>
        <div className="app">
          <div className="container">
            <Switch>
              <Route exact path='/home' component={HomePage}/>
              <Route path='/books' component={BookPage}/>
              <Route path='/musics' component={MusicPage}/>
              <Route path='/movies' component={MoviePage}/>
              <Route path='/details/:id' component={ReadDetail}/>
              <Redirect to='/home'/>
            </Switch>
          </div>
          <Tabbar/>
        </div>
      </Router>
    );
  }
  componentDidMount(){
    console.log(this)
  }
}

export default App;
