import React from 'react';
import './header.styl';

class Header extends React.Component{
  render(){
    return(
      <header>
        <span className="title">{this.props.title}</span>
      </header>
    )
  }
  componentDidMount(){
    console.log(this.props.title)
  }
}
export default Header