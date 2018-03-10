import React from 'react';
import './movie.styl';
import Header from '../header/header';
class MoviePage extends React.Component{
  render() {
    return (
      <div>
        <Header title='一个·电影'/>
        <h1>MoviePage</h1>
      </div>
    );
  }
}
export default MoviePage;