import React from "react";
import "../styles/LandingPage.scss";
import logo from "../assets/logo.png";
import landingImage from "../assets/landing-image.png";

const LandingPage = ({ onStart }) => {
  return (
    <div className="landing-page">
      <div className="left">
        
        <img
          src={landingImage}
          alt="Ilustration landing"
          className="landing-image"
        />
      </div>
      <div className="right">
         <div className="top-logo centered">
         <img src={logo} alt="SayHi Logo" className="landing-logo" />
         </div>

         <div className="welcome-box">
         <h1>Welcome to SayHi!</h1>
         <h2>Connect. Share. Smile.</h2>
         <p>A simple social network, created with love.</p>
         <button onClick={onStart}>Start now</button>
         </div>
      </div>
    </div>
  );
};

export default LandingPage;