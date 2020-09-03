import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './BottomMenu.css';
// import your fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontawesome';

class BottomMenu extends Component {

  render(){
    return (
      <div className="bottom-menu">
        <Link to="/">
          <FontAwesomeIcon className="fa-tag menu-icon selected" icon="home" />
          {/* <img className="menu-icon selected" src="assets/home.svg"/> */}
        </Link>
        <Link to="/favorites">
          <FontAwesomeIcon className="fa-tag menu-icon selected" icon="heart" />
          {/* <img className="menu-icon" src="assets/favorites.svg"/> */}
        </Link>
        <Link to="/last">
          <FontAwesomeIcon className="menu-icon selected" icon="redo-alt" />
          {/* <img className="menu-icon" src="assets/last.svg"/> */}
        </Link>
        <Link to="/profile">
          <FontAwesomeIcon className="fa-tag menu-icon selected" icon="user" />
          {/* <img className="menu-icon" src="assets/profile.svg"/> */}
        </Link>
      </div>
    );
  }
}

export default BottomMenu;
