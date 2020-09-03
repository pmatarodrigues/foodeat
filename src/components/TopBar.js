import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './TopBar.css';

class TopBar extends Component {

  render(){
    return (
      <div className="top-bar">
          <a href="/"><img className="logo" src="assets/logo.png"></img></a>
      </div>
    );
  }
}

export default TopBar;
