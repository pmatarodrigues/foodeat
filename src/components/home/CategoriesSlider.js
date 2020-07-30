import React, { Component } from 'react';
import CategoryElement from "./CategoryElement"
import "./CategoriesSlider.css";

class CategoriesSlider extends Component{


  render() {
    var firstElement = {
      'title': "Não sabes onde comer?",
      'description': 'Nós decidimos por ti.'
    }
    var secElement = {
      'title': "Italiano",
      'description': 'Papiri pupiri.'
    }
    var thirdElement = {
      'title': "Indiano",
      'description': 'Hallo guys welcome to tutorial.'
    }
    var elements = [firstElement, secElement, thirdElement];


    return (
      <div className="horizontal-slider-container">
        {elements.map((value, index) => {
            return <CategoryElement key={index} title={value.title} description={value.description} />
          })
        }
      </div>
    );
  }
}

export default CategoriesSlider;
