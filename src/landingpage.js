import React, { useEffect, useState } from "react";
import "./landingpage.css";
import Backtotop from "./backtotop";
import Downarrow from "./downarrow";
import Split from "./split";
import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landingpage() {
  const [isSplitMounted, setIsSplitMounted] = useState(false);

  useEffect(() => {
    // Check if the Split component has not been mounted yet
    if (!isSplitMounted) {
      setIsSplitMounted(true); // Set the state variable to true
      return; // Exit early without running the animation code
    }

    gsap.fromTo(
      ".section-title",
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: ".landing-container",
          start: "top 80%",
          end: "bottom 400px",
        },
        "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
        duration: 3.5,
        delay: 3.5,
      }
    );

    gsap.fromTo(
      ".section-title2",
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: ".landing-container",
          start: "top 80%",
          end: "bottom 400px",
        },
        "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
        duration: 4,
        delay: 3.5,
      }
    );

    gsap.from(".video-bright", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
      delay: 3.5,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".landing-container",
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1,
      },
    });

    tl.to(".video-bright", {
      y: "-200",
      delay: 4,
    });
    tl.to(
      ".section-title, .section-title2",
      {
        y: "-400",
        delay: 3.5,
      },
      0
    );

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
          trigger: "body",
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
  }, [isSplitMounted]);

  return (
    <div className="landing-container">
      {!isSplitMounted && <Split setIsSplitMounted={setIsSplitMounted} />}
      <div className="section-one">
        <Split />
        {/* <img
          className="section-image"
          src="./ocean-green.jpg"
          alt="mobile-leila"
        /> */}
        <video autoPlay loop muted playsInline className="video-bright">
          <source src="looped-garden-gain-m.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="section-title">SHAUN LAL</h1>
        <h1 className="section-title2">PHOTOGRAPHER</h1>
      </div>
      <div className="section-open-downarrow">
        <Downarrow />
      </div>
      <div className="backtotop-container">
        <Backtotop />
      </div>
      {/* <Loop /> */}
    </div>
  );
}
