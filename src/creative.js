import React from "react";
import "./creative.css";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

gsap.registerPlugin(ScrollTrigger);

export default function Creative() {
  useEffect(() => {
    const tlcl = gsap.timeline({
      scrollTrigger: {
        trigger: ".creative-main",
        start: "top+=-50px top",
        end: "bottom top+=100px",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });
    tlcl.to(
      ".creative-image-left-container",
      {
        ease: "power1.out",
        css: {
          transform:
            "translate3d(90%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(2.9997deg) skew(0deg, 0deg)",
        },
      },
      0
    );

    tlcl.to(
      ".creative-image-right-container",
      {
        ease: "power1.out",
        css: {
          transform:
            "translate3d(-90%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-2.9997deg) skew(0deg, 0deg)",
        },
      },
      0
    );
  }, []);
  return (
    <div className="creative-container">
      <div className="creative-main">
        <h1 className="creative-title">Inspired Muses:</h1>
        <p className="creative-subtitle">
          Unique Individual & Duo Collaborations
        </p>

        <Linktotop to="/creativepage" className="creative-button">
          See more
        </Linktotop>
        <div className="creative-image-left-container" data-speed="0.5">
          <LazyLoadImage
            className="creative-image-left"
            src="./c-jess-1.jpg"
            alt="creative-jess"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
        <div className="creative-image-right-container" data-speed="2">
          <LazyLoadImage
            className="creative-image-right"
            src="./myxval.jpg"
            alt="myxval"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
