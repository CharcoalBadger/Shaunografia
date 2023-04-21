import React from "react";
import "./pricing.css";
// import { Link} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";
gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  // useEffect(() => {
  //   gsap.from(".pricing-title", {
  //     scrollTrigger: {
  //       trigger: ".pricing-title",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     duration: 1,
  //   });

  //   gsap.from(".pricing-para-one", {
  //     scrollTrigger: {
  //       trigger: ".pricing-title",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     duration: 1.5,
  //   });

  //   gsap.from(".pricing-para-two", {
  //     scrollTrigger: {
  //       trigger: ".pricing-title",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     duration: 2,
  //   });

  //   gsap.from(".pricing-button", {
  //     scrollTrigger: {
  //       trigger: ".pricing-title",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     duration: 1.5,
  //   });
  // }, []);

  return (
    <div className="pricing-container">
      <div className="pricing-main">
        <h1 className="pricing-title">Pricing</h1>
        <p className="pricing-para-one">
          We have a range of prices for different situations and budgets.
        </p>
        <p className="pricing-para-two">
          We like to be transparent about the cost of our services.
        </p>
        <Linktotop to="/pricing" className="pricing-button">
          See more
        </Linktotop>
      </div>
    </div>
  );
}
