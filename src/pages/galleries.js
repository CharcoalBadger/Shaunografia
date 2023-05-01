import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./galleries.css";
import Navbar from "../navbar";
import Footer from "../footer";
import Creative from "../creative";
import Wedding from "../wedding";
import Event from "../event";
import Pet from "../pet";
import Backtotop from "../backtotop";
import Aboutstar from "../aboutstar";
gsap.registerPlugin(ScrollTrigger);

export default function Galleries() {
  useEffect(() => {
    // gsap.from(".galleries-title", {
    //   scrollTrigger: {
    //     trigger: ".galleries-title",
    //     start: "top 80%",
    //     end: "bottom 400px",
    //   },
    //   "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    //   opacity: 0,
    //   ease: "power4.inOut",
    //   y: 100,
    //   duration: 1,
    // });

    gsap.from(".galleries-para-1", {
      scrollTrigger: {
        trigger: ".galleries-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.5,
    });

    gsap.from(".galleries-para-2", {
      scrollTrigger: {
        trigger: ".galleries-title",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 2,
    });

    gsap.from(".galleries-para-3", {
      scrollTrigger: {
        trigger: ".galleries-title",
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
          trigger: ".galleries-box",
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
    <div className="galleries-container">
      <Aboutstar />
      <div className="galleries-back">
        <Backtotop />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="galleries-box">
        <h1 className="galleries-title">Galleries</h1>
        <p className="galleries-para-1">
          Discover beautiful photos of individuals, couples, pets, and special
          events in our galleries.
        </p>
        <p className="galleries-para-2">
          From creative shoots to wedding and engagement photography, we
          specialize in capturing unforgettable moments.
        </p>
        <p className="galleries-para-3">
          Browse our galleries and book your photoshoot today!
        </p>
      </div>
      <div>
        <Creative />
      </div>
      <div>
        <Wedding />
      </div>
      <div>
        <Event />
      </div>
      <div>
        <Pet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
