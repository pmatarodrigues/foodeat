import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import TopBar from './components/TopBar';
import ButtonGenerate from './components/ButtonGenerate';

class App extends Component {

  render(){
    return (
      <div>
        <div className="App">
          <TopBar></TopBar> 

          <Home></Home>
        </div>
        <ButtonGenerate></ButtonGenerate>
      </div>
    );
  }
}

export default App;
