import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./creativepage.css";
import Navbar from "../navbar";
import Shortfooter from "../shortfooter";
import Backtotop from "../backtotop";
import Imagegallery from "../imagegallery";
import Myxvalgallery from "../myxvalgallery";
import Galleryopen from "../galleryopen";
import Jessgallery from "../jessgallery";
gsap.registerPlugin(ScrollTrigger);

export default function Creativepage() {
  useEffect(() => {
    gsap.from(".leila-title-container", {
      scrollTrigger: {
        trigger: ".leila-title-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power2.Out",
      y: 50,
      duration: 2,
    });

    gsap.from(".mv-title-container", {
      scrollTrigger: {
        trigger: ".mv-title-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power2.Out",
      y: 50,
      duration: 2,
    });

    gsap.from(".jess-title-container", {
      scrollTrigger: {
        trigger: ".jess-title-container",
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
          trigger: ".creativepage-box",
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
    <div className="creativepage-container">
      <div className="creativepage-back">
        <Backtotop />
      </div>
      <div>
        <Navbar />
      </div>
      <div className="creativepage-galleryopen">
        <Galleryopen />
      </div>
      <div className="leila-title-container">
        <h3 className="leila-title">
          Leila's Timeless Journey: Trains, Tracks, and River Rhapsody
        </h3>
      </div>
      <div className="creativeopen-imagegallery">
        <Imagegallery />
      </div>
      <div className="mv-title-container">
        <h3 className="mv-title">
          Myx & Val's Enchanting Escape: A Bird Park Picnic Romance
        </h3>
      </div>
      <div>
        <Myxvalgallery />
      </div>
      <div className="jess-title-container">
        <h3 className="jess-title">
          Jess's Garden Glamour: A Vogue Affair at Hamilton Gardens
        </h3>
      </div>
      <div>
        <Jessgallery />
      </div>
      <div>
        <Shortfooter />
      </div>
    </div>
  );
}
