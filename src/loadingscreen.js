import React from "react";
import "./loadingscreen.css";

const Loadingscreen = () => {
  return (
    <div className="loading-container">
      <h1>Loading your photography...</h1>
      <div className="loader"></div>
    </div>
  );
};

export default Loadingscreen;
