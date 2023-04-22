import React, { useEffect } from "react";
import "./aboutsection.css";
// import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutsection() {
  useEffect(() => {
    // gsap.from(".about-title", {
    //   scrollTrigger: {
    //     trigger: ".about-title",
    //     start: "top 80%",
    //     end: "bottom 400px",
    //   },
    //   "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    //   opacity: 0,
    //   ease: "power4.inOut",
    //   y: 100,
    //   duration: 1,
    // });

    gsap.from(".about-name", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.5,
    });

    gsap.from(".gif", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.7,
    });

    gsap.from(".about-p1, .about-p2", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2,
    });

    gsap.from(".about-button", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.1,
    });

    gsap.from(".about-social-icons p", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 3,
    });

    gsap.from(".pexel-white, .insta-white", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 3.5,
    });
  }, []);

  return (
    <div className="about-section-container">
      <div className="about-section-inner">
        <h1 className="about-title">Kia Ora!</h1>
        <div className="about-name-gif-container">
          <h2 className="about-name">
            I'm Shaun
            <span className="colored-theythem"> (They/Them)</span>
          </h2>
          <img className="gif" src="/progressiveflag.webp" alt="Gif" />
        </div>
        <p className="about-p1">
          Discover captivating visuals by our non-binary photographer from New
          Zealand and the Philippines. With a passion for creative photography,
          their diverse portfolio covers events, weddings, engagements, and pet
          photoshoots. Combining multicultural influences and attention to
          detail, they create memorable visual stories.
        </p>
        <p className="about-p2">Let's create beautiful memories together!</p>

        <Linktotop to="/about" className="about-button">
          Read My Story
        </Linktotop>

        <div className="about-social-icons">
          <a href="https://www.instagram.com/shaunografia/">
            <img
              className="insta-white"
              src="/insta-white-green.png"
              alt="InstagramG"
            />
          </a>
          <p>Instagram</p>
          <a href="https://www.pexels.com/@shaunografia/">
            <img
              className="pexel-white"
              src="/pexel-white-green.png"
              alt="Pexel"
            />
          </a>
          <p>Pexels</p>
        </div>
      </div>
    </div>
  );
}
