import React from "react";
import "./loadingscreen.css";

const Loadingscreen = () => {
  return (
    <div className="loading-container">
      <h1>Loading...</h1>
      <div className="shutter-loader">
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
        <div className="shutter"></div>
      </div>
    </div>
  );
};

export default Loadingscreen;
