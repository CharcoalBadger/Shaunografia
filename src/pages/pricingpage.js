import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./pricingpage.css";
import Navbar from "../navbar";
import Shortfooter from "../shortfooter";
import Backtotop from "../backtotop";
// import Pricingtier from "../pricingtier";
import Pricingtier2 from "../pricingtier2";
gsap.registerPlugin(ScrollTrigger);

export default function Pricingpage() {
  useEffect(() => {
    if (window.innerWidth <= 767) {
      console.log("if");
      console.log("if" + window.innerWidth);
      const tlfl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer-link-container",
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tlfl.to(
        ".progress-wrap",
        {
          ease: "power1.out",
          opacity: 1,
          bottom: "30%",
        },
        0
      );
    } else {
      console.log("else");
      console.log("else" + window.innerWidth);
      const tlfr = gsap.timeline({
        scrollTrigger: {
          trigger: ".pricingpage-box",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      tlfr.to(
        ".progress-wrap",
        {
          ease: "power1.out",
          opacity: 1,
          bottom: "80px",
        },
        0
      );
    }
  }, []);
  return (
    <div className="pricingpage-container">
      <div className="pricingpage-back">
        <Backtotop />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="pricingpage-box"></div>
      <h1 className="pricingpage-title">What's The Deal?</h1>
      <p className="pricingpage-subtitle">
        We are committed to transparency and want our clients to fully
        understand our services and costs. Please don't hesitate to reach out if
        you have any questions or concerns.
      </p>
      <p className="pricingpage-subtitle">
        To secure your session, we require a non-refundable deposit of 25%. This
        deposit is to cover any last-minute cancellations and will be applied
        towards the total cost of your session. Please note that if you cancel
        your session, the deposit will not be refunded.
      </p>
      <Pricingtier2 />
      <div>
        <Shortfooter />
      </div>
    </div>
  );
}
