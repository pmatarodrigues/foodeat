import React, { Component } from 'react';
import './TopBar.css';

class TopBar extends Component {

  render(){
    return (
      <div className="top-bar">
          <img className="logo" src="assets/logo.png"></img>
      </div>
    );
  }
}

export default TopBar;
