import React, { Component } from 'react';
import "./Home.css";
import CategoriesSlider from '../components/home/CategoriesSlider';
import { render } from '@testing-library/react';

class Home extends Component{

  render() {
    return (
      <div>
        <CategoriesSlider/>
      </div>
    );
  }
}

export default Home;
