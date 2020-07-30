import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import "./Restaurant.css";

class Restaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        selectedRestaurant: props.selectedRestaurant,
    };
  }


  render() {
    return (
      <div>
        <div id="text-to-show">
          { // show restaurant name if it's not null
          this.state.selectedRestaurant && <h3> {this.state.selectedRestaurant.tags.name}</h3> }
          {console.log(this.props.match.params)}
        </div>
    </div>
    );
  }
}

export default Restaurant;
