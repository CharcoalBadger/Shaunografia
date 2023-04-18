import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contactpage.css";
import Navbar from "../navbar";
import Footer from "../footer";
import Backtotop from "../backtotop";
import Maincontact from "../maincontact";
gsap.registerPlugin(ScrollTrigger);

export default function Contactpage() {
  // This is to dynamically load certain components based on width of screen sizes
  const [isDesktop, setDesktop] = useState(window.innerWidth > 767);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 767);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
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
          trigger: ".footer-link-container",
          start: "bottom bottom",
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
    <div className="contactpage-container">
      <div className="contactpage-box">
        <div>
          <Backtotop />
        </div>
        <div>
          <Navbar />
        </div>
        <div> {isDesktop ? <div></div> : <Maincontact />}</div>
        <div className="contact-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
