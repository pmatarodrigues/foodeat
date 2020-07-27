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
        console.log("Generated")
    }
    
    render() {
        return (
            <div className="generate buttons">
                <button className="generate submit" onClick={() => this.showText(this)}>
                    <FontAwesomeIcon icon="dice" />
                    <Link to="/profile">Ir para a página sobre \o/</Link>
                </button>
            </div>
        );
    }
}




export default ButtonGenerate;
