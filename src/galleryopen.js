import React from "react";
import "./galleryopen.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Galleryopen() {
  useEffect(() => {
    gsap.from(".galleryopen-title", {
      scrollTrigger: {
        trigger: ".galleryopen-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 3,
    });

    gsap.from(".galleryopen-image-front", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".galleryopen-image-back", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".galleryopen-image-front", {
      scrollTrigger: {
        trigger: ".galleryopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".galleryopen-image-back", {
      scrollTrigger: {
        trigger: ".galleryopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".galleryopen-para-container p", {
      scrollTrigger: {
        trigger: ".galleryopen-para-container",
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
    <div className="galleryopen-container">
      <h1 className="galleryopen-title">Inspired Muses</h1>
      <div className="galleryopen-image-front-container">
        <img
          className="galleryopen-image-front"
          src="./leila-bottom.png"
          alt="galleryopen-leila"
        />
        <img
          className="galleryopen-image-back"
          src="./leila-2.jpg"
          alt="galleryopen-leila"
        />
      </div>
      <div className="galleryopen-para-container">
        <p className="galleryopen-para">
          Welcome to Inspired Muses, a captivating collection of creative
          photoshoots that showcase the extraordinary synergy of individual and
          duo collaborations.
        </p>
        <p className="galleryopen-para2">
          As you explore Inspired Muses, you will discover the unique chemistry
          between our pairs of collaborators, each bringing their own
          distinctive flair and vision to the table.
        </p>
      </div>
    </div>
  );
}
