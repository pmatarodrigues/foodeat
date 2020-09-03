import React, { Component } from 'react';
import CategoryElement from "./CategoryElement"
import "./CategoriesSlider.css";

class CategoriesSlider extends Component{


  render() {
    var firstElement = {
      'title': "Não sabes onde comer?",
      'description': 'Nós decidimos por ti.'
    }
    var vegetarian = {
      'title': "Vegetariano",
      'description': 'Papiri pupiri.',
      'slug': ["vegetarian", "vegan"]
    }
    var fish = {
      'title': "Peixe / Marisco",
      'description': 'Papiri pupiri.',
      'slug': ["burger", "chicken", ]
    }
    var snack = {
      'title': "Snack",
      'description': 'Hallo guys welcome to tutorial.',
      'slug': ["burger", "chicken", ]
    }
    var chinese = {
      'title': "Chinês",
      'description': 'Papiri pupiri.',
      'slug': ["burger", "chicken", ]
    }
    var italian = {
      'title': "Italiano",
      'description': 'Papiri pupiri.',
      'slug': ["burger", "chicken", ]
    }
    var elements = [firstElement, vegetarian, snack, chinese, italian];


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
