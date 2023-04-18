import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./pricingpage.css";
import Navbar from "../navbar";
import Footer from "../footer";
import Backtotop from "../backtotop";
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
      <div className="pricingpage-box">
        <div className="pricing-section-inner">
          <h1 className="pricingpage-title">Pricing</h1>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
