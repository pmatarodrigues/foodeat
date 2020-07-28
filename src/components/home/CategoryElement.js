import React, { Component } from 'react';
import "./CategoryElement.css";
import { render } from '@testing-library/react';
import ButtonGenerate from '../ButtonGenerate';


class CategoryElement extends Component{

  render() {
    return (
      <div className="category-element">
        <div className="category-element-data">
          <h3 className="category-title">{this.props.title}</h3>
          <h4 className="category-address">{this.props.description}</h4>
        </div>
        <ButtonGenerate title={this.props.title} />
      </div>
    );
  }
}

export default CategoryElement;
