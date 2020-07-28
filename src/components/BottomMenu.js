import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './BottomMenu.css';

class BottomMenu extends Component {

  render(){
    return (
      <div className="bottom-menu">
        <Link to="/">
          <img className="menu-icon selected" src="assets/home.svg"/>
        </Link>
        <Link to="/favorites">
          <img className="menu-icon" src="assets/favorites.svg"/>
        </Link>
        <Link to="/last">
          <img className="menu-icon" src="assets/last.svg"/>
        </Link>
        <Link to="/profile">
          <img className="menu-icon" src="assets/profile.svg"/>
        </Link>
      </div>
    );
  }
}

export default BottomMenu;
