import React, { useEffect } from "react";
import "./navright.css";
// import { Link } from "react-router-dom";
import Linktotop from "./linktotop";
import { gsap } from "gsap";

export default function Navright() {
  useEffect(() => {
    gsap.fromTo(
      ".nav-link",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,

        ease: "power4.inOut",
        stagger: 0.2,
      }
    );
  }, []);

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
