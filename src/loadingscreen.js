import React, { useEffect } from "react";
import "./loadingscreen.css";

const Loadingscreen = ({ duration }) => {
  return (
    <div className="loading-container">
      <div className="progress-bar-container">
        <div className="progress-bar left-bar"></div>
        <div className="progress-bar right-bar"></div>
      </div>
      <div className="typewriter">
        <h1>Welcome To Shaunografia</h1>
      </div>
      <div className="split-background-top"></div>
      <div className="split-background-bottom"></div>
    </div>
  );
};

export default Loadingscreen;
