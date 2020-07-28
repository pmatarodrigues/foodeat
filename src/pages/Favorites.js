import React, {Component} from 'react';
import "./Home.css";
import { render } from '@testing-library/react';
import ButtonGenerate from '../components/ButtonGenerate';

class Favorites extends Component {

  render() {
    return (
      <div>
        <div id="text-to-show" style={{paddingTop: "40vh"}}>
          <h2>Favorites</h2>
        </div>
      </div>

    );
  }
}

export default Favorites;
