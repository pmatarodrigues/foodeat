import React from 'react';
import "./Home.css";
import TopBar from '../components/TopBar';
import ButtonGenerate from '../components/ButtonGenerate';

function Profile() {

  return (
    <div>
    <div className="App">
      <TopBar></TopBar> 

      <div id="text-to-show" style={{paddingTop: "40vh"}}>
        <h2>Profile</h2>
      </div>
    </div>
    <ButtonGenerate></ButtonGenerate>
  </div>
  );
}

export default Profile;
