import React, { Component } from 'react';
import "./Home.css";
import { render } from '@testing-library/react';

class Home extends Component{

  render() {
    return (
      <div id="text-to-show" style={{paddingTop: "40vh"}}>
        <h2>Wish you were here</h2>
      </div>
    );
  }
}

export default Home;
