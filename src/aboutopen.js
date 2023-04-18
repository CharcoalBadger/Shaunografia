import React, { useEffect } from "react";
import "./aboutopen.css";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutopen() {
  useEffect(() => {
    gsap.from(".about-open-image", {
      scrollTrigger: {
        trigger: ".about-open-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });
  }, []);

  return (
    <div className="about-open-container">
      <div className="about-open-inner">
        <div className="sticky-header">
          <h1 className="about-open-shaun">SHAUN</h1>
          <h1 className="about-open-lal">LAL</h1>
        </div>
        <div className="about-open-image-container">
          <img
            src="main-leila-3.jpg"
            alt="about-open"
            className="about-open-image"
          />
        </div>
      </div>
    </div>
  );
}
