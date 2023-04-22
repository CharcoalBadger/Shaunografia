import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contactpage.css";
import Navbar from "../navbar";
import Shortfooter from "../shortfooter";
import Backtotop from "../backtotop";
import Maincontact from "../maincontact";
import Aboutstar from "../aboutstar";
import Downarrow from "../downarrow";
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
    gsap.from(".contactpage-title", {
      scrollTrigger: {
        trigger: ".contactpage-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2,
    });
    gsap.from(".contactpage-subtitle", {
      scrollTrigger: {
        trigger: ".contactpage-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2.5,
    });
    gsap.from(".contactpage-subtitle2", {
      scrollTrigger: {
        trigger: ".contactpage-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 3,
    });

    if (window.innerWidth <= 767) {
      console.log("if");
      console.log("if" + window.innerWidth);
      const tlfl = gsap.timeline({
        scrollTrigger: {
          trigger: ".shortfooter-section-container",
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
          trigger: ".contactpage-box",
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
      <Aboutstar />
      <div>
        <Backtotop />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="contactpage-box">
        <div className="contactpage-inner">
          <h1 className="contactpage-title">
            Let's Chat About Your Photoshoot
          </h1>
          <p className="contactpage-subtitle">
            We're here to help with your questions or needs, ensuring a seamless
            and personalized photography experience.
          </p>
          <p className="contactpage-subtitle2">
            Reach out via our contact form for inquiries, package selection
            assistance, or to discuss your creative vision. We're eager to
            connect and make your photographic dreams a reality.
          </p>
        </div>
        <div className="contactpage-downarrow">
          <Downarrow />
        </div>
        <div className="contactpage-maincontact">
          {isDesktop ? (
            <div></div>
          ) : (
            <div>
              <Maincontact />
            </div>
          )}
        </div>
        <div className="contact-footer">
          <Shortfooter />
        </div>
      </div>
    </div>
  );
}
