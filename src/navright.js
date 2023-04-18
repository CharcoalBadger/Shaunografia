import React from "react";
import "./navright.css";
// import { Link } from "react-router-dom";
import Linktotop from "./linktotop";

export default function Navright() {
  return (
    <div className="nav-right-container">
      <div className="nav-right">
        <Linktotop to="/galleries" className="nav-link">
          Galleries
        </Linktotop>
        <Linktotop to="/pricing" className="nav-link">
          Pricing
        </Linktotop>
        <Linktotop to="/about" className="nav-link">
          About
        </Linktotop>
        <Linktotop to="/contact" className="nav-link">
          Contact
        </Linktotop>
      </div>
    </div>
  );
}
