import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./pricingpage.css";
import Navbar from "../navbar";
import Shortfooter from "../shortfooter";
import Backtotop from "../backtotop";
import Pricingtier3 from "../pricingtier3";
import Pricingtier2 from "../pricingtier2";
import Pricingtier4 from "../pricingtier4";
import Aboutstar from "../aboutstar";
gsap.registerPlugin(ScrollTrigger);

export default function Pricingpage() {
  useEffect(() => {
    gsap.from(".pricingpage-title", {
      scrollTrigger: {
        trigger: ".pricingpage-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2,
    });

    gsap.from(".pricingpage-subtitle", {
      scrollTrigger: {
        trigger: ".pricingpage-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      stagger: 0.1,
      duration: 2.1,
    });

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
      <Aboutstar />
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
      <div>
        <Pricingtier2 />
      </div>
      <div>
        <Pricingtier3 />
      </div>
      <div>
        <Pricingtier4 />
      </div>
      <div>
        <Shortfooter />
      </div>
    </div>
  );
}
