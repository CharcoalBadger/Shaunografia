import React from "react";
import "./petopen.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Petopen() {
  useEffect(() => {
    gsap.from(".petopen-title", {
      scrollTrigger: {
        trigger: ".petopen-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 3,
    });

    gsap.from(".petopen-image-front", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".petopen-image-back", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".petopen-image-front", {
      scrollTrigger: {
        trigger: ".petopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".petopen-image-back", {
      scrollTrigger: {
        trigger: ".petopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".petopen-para-container p", {
      scrollTrigger: {
        trigger: ".petopen-para-container",
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
    <div className="petopen-container">
      <h1 className="petopen-title">Whiskers & Wagging Tails</h1>
      <div className="petopen-image-front-container">
        <img
          className="petopen-image-front"
          src="./pet-bottom.png"
          alt="petopen-leila"
        />
        <img
          className="petopen-image-back"
          src="./main-pet-1.jpg"
          alt="petopen-leila"
        />
      </div>
      <div className="petopen-para-container">
        <p className="petopen-para">
          Welcome to Whiskers & Wagging Tails, a heartwarming and delightful
          gallery section dedicated to capturing the endearing and playful
          moments of our beloved pets.
        </p>
        <p className="petopen-para2">
          This charming collection showcases the unique personalities,
          unconditional love, and sheer joy that our furry companions bring into
          our lives.
        </p>
      </div>
    </div>
  );
}
