import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./aboutpage.css";
import Navbar from "../navbar";
import Shortfooter from "../shortfooter";
import Backtotop from "../backtotop";
import Aboutopen from "../aboutopen";
import Aboutstar from "../aboutstar";
gsap.registerPlugin(ScrollTrigger);

export default function Aboutpage() {
  useEffect(() => {
    gsap.from(".aboutpage-title", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1,
    });
    gsap.from(".about-title", {
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
      duration: 2,
    });

    gsap.from(".about-section-inner p", {
      scrollTrigger: {
        trigger: ".about-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2.5,
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
          trigger: ".aboutpage-box",
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
    <div className="aboutpage-container">
      <Aboutstar />
      <div className="aboutpage-back">
        <Backtotop />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <Aboutopen />
      </div>
      <div className="aboutpage-box">
        <div className="about-section-inner">
          <h1 className="about-title">Kia Ora!</h1>
          <div className="aboutpage-name-gif-container">
            <h2 className="about-name">
              I'm Shaun
              <span className="colored-theythem"> (They/Them)</span>
            </h2>
            <img
              className="aboutpage-gif"
              src="/progressiveflag.webp"
              alt="Gif"
            />
          </div>
          <p className="about-p1">
            I am a creative photographer from New Zealand.
          </p>
          <p className="about-p1">
            I've had a passion for photography for over 5 years and have been
            lucky enough to turn my hobby into a career. I believe that every
            photo has a story to tell and I strive to capture the unique
            emotions and perspectives in each of my shots.
          </p>
          <p className="about-p1">
            Travelling and exploring new places are my biggest inspirations. I
            love to immerse myself in different cultures and environments,
            always on the lookout for new ways to challenge and inspire my
            creativity.
          </p>
          <p className="about-p1">
            Thank you for visiting my page. I hope you enjoy my work as much as
            I enjoy capturing and sharing it with the world.
          </p>
        </div>
      </div>
      <div>
        <Shortfooter />
      </div>
    </div>
  );
}
