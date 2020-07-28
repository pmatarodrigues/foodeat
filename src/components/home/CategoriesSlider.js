import React, { Component } from 'react';
import CategoryElement from "./CategoryElement"
import "./CategoriesSlider.css";

class CategoriesSlider extends Component{


  render() {
    const elements = ['one', 'two', 'three'];

    return (
      <div className="horizontal-slider-container">
        {elements.map((value, index) => {
            return <CategoryElement/>
          })
        }
      </div>
    );
  }
}

export default CategoriesSlider;
