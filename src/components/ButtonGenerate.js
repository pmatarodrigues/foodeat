import React from 'react';
import './ButtonGenerate.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
// import your fontawesome library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../fontawesome';


class ButtonGenerate extends React.Component{


    constructor(props) {
        super(props);
        this.state = {showing: false};
    }

    showText(){
        alert("Generated " + this.props.title)
    }

    render() {
        return (
            <div className="generate buttons">
                <button className="generate submit" onClick={() => this.showText(this)}>
                    <FontAwesomeIcon icon="dice" />
                </button>
            </div>
        );
    }
}




export default ButtonGenerate;
