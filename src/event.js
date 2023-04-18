import React from "react";
import "./event.css";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

gsap.registerPlugin(ScrollTrigger);

export default function Event() {
  useEffect(() => {
    const tlel = gsap.timeline({
      scrollTrigger: {
        trigger: ".event-main",
        start: "top+=-50px top",
        end: "bottom top+=100px",
        scrub: true,

        pin: true,
        pinSpacing: true,
      },
    });
    tlel.to(
      ".event-image-left-container",
      {
        ease: "power1.out",
        css: {
          transform:
            "translate3d(90%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(2.9997deg) skew(0deg, 0deg)",
        },
      },
      0
    );

    tlel.to(
      ".event-image-right-container",
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
    <div className="event-container">
      <div className="event-main">
        <h1 className="event-title">
          <span className="colored-event">Embracing</span> the Energy:
        </h1>
        <p className="event-subtitle">Celebrating Events & Festivals</p>

        <Linktotop to="/eventpage" className="event-button">
          See more
        </Linktotop>

        <div className="event-image-left-container">
          <LazyLoadImage
            className="event-image-left"
            src="./e-bgo-1.jpg"
            alt="Big Gay Out 2023 left"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
        <div className="event-image-right-container">
          <LazyLoadImage
            className="event-image-right"
            src="./e-bgo-2.jpg"
            alt="Big Gay Out 2023 right"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
