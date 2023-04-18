import React from "react";
import "./eventopen.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Eventopen() {
  useEffect(() => {
    gsap.from(".eventopen-title", {
      scrollTrigger: {
        trigger: ".eventopen-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 3,
    });

    gsap.from(".eventopen-image-front", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".eventopen-image-back", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".eventopen-image-front", {
      scrollTrigger: {
        trigger: ".eventopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".eventopen-image-back", {
      scrollTrigger: {
        trigger: ".eventopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".eventopen-para-container p", {
      scrollTrigger: {
        trigger: ".eventopen-para-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      stagger: 0.3,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="eventopen-container">
      <h1 className="eventopen-title">Embracing the Energy</h1>
      <div className="eventopen-image-front-container">
        <img
          className="eventopen-image-front"
          src="./bgo-bottom.png"
          alt="eventopen-bgo"
        />
        <img
          className="eventopen-image-back"
          src="./main-bgo-1.jpg"
          alt="eventopen-bgo"
        />
      </div>
      <div className="eventopen-para-container">
        <p className="eventopen-para">
          Welcome to Embracing the Energy, a captivating visual journey that
          showcases the vibrant spirit and exuberance of life's most memorable
          moments.
        </p>
        <p className="eventopen-para2">
          As you explore Embracing the Energy, allow yourself to be immersed in
          the colors, emotions, and atmosphere that define these events
        </p>
      </div>
    </div>
  );
}
