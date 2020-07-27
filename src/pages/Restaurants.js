import React, {Component} from 'react';
import "./Home.css";
import { render } from '@testing-library/react';
import TopBar from '../components/TopBar';
import ButtonGenerate from '../components/ButtonGenerate';

class Restaurants extends Component {
  
  render() {
    return (
      <div>
        <div className="App">
          <TopBar></TopBar> 

          <div id="text-to-show" style={{paddingTop: "40vh"}}>
            <h2>Rests</h2>
          </div>
        </div>
        <ButtonGenerate></ButtonGenerate>
      </div>

    );
  }
}

export default Restaurants;
