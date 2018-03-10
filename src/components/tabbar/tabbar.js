import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../assets/fonts/iconfont.css';
import './tabbar.styl';

class Tabbar extends React.Component{
  render(){
    return(
      <div>
        <div className="one-tab">
            <div className="tab-item">
                <NavLink to="/home" className="nav-link">
                    <i className="iconfont icon-home"></i>
                </NavLink>
            </div>
            <div className="tab-item">
                <NavLink to="/books" className="nav-link">
                  <i className="iconfont icon-book"></i>
                </NavLink>
            </div>
            <div className="tab-item">
                <NavLink to="/musics" className="nav-link">
                  <i className="iconfont icon-music"></i>
                </NavLink>
            </div>
            <div className="tab-item">
                <NavLink to="/movies" className="nav-link">
                  <i className="iconfont icon-icon-test"></i>
                </NavLink>
            </div>
        </div>
      </div>
    )
  }
}
export default Tabbar