import React from "react";
import "./wedding.css";
// import { Link} from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

gsap.registerPlugin(ScrollTrigger);

export default function Wedding() {
  useEffect(() => {
    const tlwl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wedding-main",
        start: "top+=-50px top",
        end: "bottom top+=100px",
        scrub: true,

        pin: true,
        pinSpacing: true,
      },
    });
    tlwl.to(
      ".wedding-image-left-container",
      {
        ease: "power1.out",
        css: {
          transform:
            "translate3d(90%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(2.9997deg) skew(0deg, 0deg)",
        },
      },
      0
    );

    tlwl.to(
      ".wedding-image-right-container",
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
    <div className="wedding-container">
      <div className="wedding-main">
        <h1 className="wedding-title">
          <span className="colored-wedding">Forever</span> & Always:
        </h1>
        <p className="wedding-subtitle">
          Timeless Weddings, Engagements & Elopement Stories
        </p>

        <Linktotop className="wedding-button">See more</Linktotop>

        <div className="wedding-image-left-container">
          <LazyLoadImage
            className="wedding-image-left"
            src="./w-comingsoon-3.png"
            alt="wedding coming soon"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
        <div className="wedding-image-right-container">
          <LazyLoadImage
            className="wedding-image-right"
            src="./w-comingsoon-3.png"
            alt="wedding to be added"
            effect="opacity"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
