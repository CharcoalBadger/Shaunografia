import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./eventpage.css";
import Navbar from "../navbar";
import Shortfooter from "../shortfooter";
import Backtotop from "../backtotop";
import Eventopen from "../eventopen";
import Bgogallery from "../bgogallery";

gsap.registerPlugin(ScrollTrigger);

export default function Eventpage() {
  useEffect(() => {
    gsap.from(".bgo-title-container", {
      scrollTrigger: {
        trigger: ".bgo-title-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power2.Out",
      y: 50,
      duration: 2,
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
          trigger: ".eventpage-box",
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
    <div className="eventpage-container">
      <div className="eventpage-back">
        <Backtotop />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="eventpage-galleryopen">
        <Eventopen />
      </div>
      <div className="bgo-title-container">
        <h3 className="bgo-title">Big Gay Out 2023 (BGO NZ)</h3>
      </div>
      <div className="bgo-imagegallery">
        <Bgogallery />
      </div>
      <div>
        <Shortfooter />
      </div>
    </div>
  );
}
