import React, { Component } from 'react';
import "./CategoryElement.css";
import { render } from '@testing-library/react';

class CategoryElement extends Component{

  render() {
    return (
      <div className="category-element">
        <div className="category-element-data">
          <h3 className="category-title">Museu do Presunto</h3>
          <h4 className="category-address">CC Triângulo</h4>
        </div>
      </div>
    );
  }
}

export default CategoryElement;
