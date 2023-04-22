import React, { useEffect } from "react";
import "./aboutopen.css";
import Downarrow from "./downarrow";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutopen() {
  useEffect(() => {
    gsap.from(".about-open-shaun", {
      scrollTrigger: {
        trigger: ".about-open-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2,
    });

    gsap.from(".about-open-lal", {
      scrollTrigger: {
        trigger: ".about-open-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2.1,
    });
  }, []);
  return (
    <div className="about-open-container">
      <div className="about-open-inner">
        <div className="sticky-header">
          <div className="about-open-shaun-container">
            <h1 className="about-open-shaun">SHAUN</h1>
          </div>
          <div className="about-open-lal-container">
            <h1 className="about-open-lal">LAL</h1>
          </div>
        </div>
        <div className="about-open-downarrow">
          <Downarrow />
        </div>
        <div className="extra-space"></div>
        <div className="about-open-image-container">
          {/* <img
            src="about-me-5.jpg"
            alt="about-open"
            className="about-open-image"
          /> */}
        </div>
      </div>
    </div>
  );
}
