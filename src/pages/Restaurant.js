import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import "./Restaurant.css";
// import your fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontawesome';

class Restaurant extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: false,
        selectedRestaurant: ""
    };
  }

  componentDidMount(props){
    // set state from restaurant received from props
    // -- randomly generated on ButtonGenerate
    this.setState({selectedRestaurant: this.props.location.state.selectedRestaurant})
  }

  render() {
    return (
      <div className="centered-section">
        {// show restaurant name if it's not null
        this.state.selectedRestaurant && <RestaurantDetails selectedRestaurant={this.state.selectedRestaurant}/> }
      </div>
    );
  }
}

class RestaurantDetails extends Component{
  constructor(props) {
    super(props);
    this.state = {
        loading: false,
    };
  }

  render() {
    return (
      <div className="details-card card">
        <h3 className="title">{ this.props.selectedRestaurant.tags.name }</h3>
        <p className="address">{ this.props.selectedRestaurant.tags.name }</p>
        <div className="details-button-list">
            <a className="btn btn-dark button centered-icon btn-links" href={"https://www.google.com/maps/search/?api=1&query=" + this.props.selectedRestaurant.lat + "," +  this.props.selectedRestaurant.lon} target="_blank" >
              <FontAwesomeIcon icon="location-arrow" />
              Leva-me lá!
            </a>

          <button className="btn button centered-icon btn-links">
            <FontAwesomeIcon icon="heart" />
            Ver no TripAdvisor
          </button>
        </div>
        <button className="btn btn-red button centered-icon btn-favorites">
          <FontAwesomeIcon icon="heart" />
          Adicionar aos Favoritos
        </button>
      </div>
    );
  }
}

export default withRouter(Restaurant);
