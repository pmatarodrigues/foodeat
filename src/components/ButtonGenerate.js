import React, { Component } from 'react';
import './ButtonGenerate.css';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';
// import your fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontawesome';

// https://wiki.openstreetmap.org/wiki/Overpass_API#Public_Overpass_API_instances

class ButtonGenerate extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showing: false,
            loading: false,
            restaurantsJSON: "",
            selectedRestaurant: ""
        };
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRestaurantsData(){
        // -- get json data from url
        // -- uses overpass-api from openstreetmap
        // -- test on http://overpass-turbo.eu/
        // --
        let latitude = "41.441120";
        let longitude = "-8.291606";
        let radius = "1000";
        let type = "restaurant";
        let url = "https://www.overpass-api.de/api/interpreter?data=[out:json];node(around:"+ radius +"," + latitude + "," + longitude + ")[%22amenity%22~%22" + type + "%22];out%20body;%3E;out%20skel;";

        axios.get(url)
        .then(res => {
            const restaurantsData = res.data.elements;
            // get total number of restaurants
            this.setState({restaurantsJSON: restaurantsData});

            // generate random restaurant
            var randomInt = this.getRandomInt(0, restaurantsData.length)
            var selectedRestaurant = restaurantsData[randomInt]

            // set selected restaurant as state
            this.setState({selectedRestaurant: selectedRestaurant})
        })
        .catch((error) => console.log("Can’t access " + url + " response. " + error))
    }


    render(){
        return (
            <div className="generate buttons">
                <button className="generate submit" onClick={ () => { this.getRestaurantsData() } }>
                    <FontAwesomeIcon icon="dice" />
                    { // show restaurant name if it's not null
                    this.state.selectedRestaurant && <Link params={{ selectedRestaurant: this.state.selectedRestaurant }} to={`/restaurant/${this.state.selectedRestaurant.tags.name}`}>{this.state.selectedRestaurant.tags.name}'s Page</Link> }
                </button>
            </div>
        );
    }

}

export default ButtonGenerate;