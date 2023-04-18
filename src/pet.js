import React from "react";
import "./pet.css";
// import { Link} from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

gsap.registerPlugin(ScrollTrigger);

export default function Pet() {
  useEffect(() => {
    const tlcl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pet-main",
        start: "top+=-50px top",
        end: "bottom top+=100px",
        scrub: true,

        pin: true,
        pinSpacing: true,
      },
    });
    tlcl.to(
      ".pet-image-left-container",
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
      ".pet-image-right-container",
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
    <div className="pet-container">
      <div className="pet-main">
        <h1 className="pet-title">
          <span className="colored-pet">Whiskers</span> & Wagging Tails:
        </h1>
        <p className="pet-subtitle">Candid Moments of Our Furry Friends</p>

        <Linktotop to="/petpage" className="pet-button">
          See more
        </Linktotop>
        <div className="pet-image-left-container" data-speed="0.5">
          <LazyLoadImage
            className="pet-image-left"
            src="./p-doggo-2.jpg"
            alt="doggo 1"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
        <div className="pet-image-right-container" data-speed="2">
          <LazyLoadImage
            className="pet-image-right"
            src="./p-doggo-1.jpg"
            alt="doggo 2"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
