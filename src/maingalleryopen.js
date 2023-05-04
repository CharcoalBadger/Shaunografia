import React from "react";
import "./maingalleryopen.css";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Maingalleryopen() {
  useEffect(() => {
    gsap.from(".maingalleryopen-title", {
      scrollTrigger: {
        trigger: ".maingalleryopen-container",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 3,
    });

    gsap.from(".maingalleryopen-image-front", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".maingalleryopen-image-back", {
      "clip-path": "polygon(47% 100%, 47% 100%, 47% 100%, 47% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      duration: 3,
    });

    gsap.from(".maingalleryopen-image-front", {
      scrollTrigger: {
        trigger: ".galleryopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".maingalleryopen-image-back", {
      scrollTrigger: {
        trigger: ".galleryopen-container",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
      y: 200,
    });

    gsap.from(".maingalleryopen-para-container p", {
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
    <div className="maingalleryopen-container">
      <h1 className="maingalleryopen-title">Galleries</h1>
      <div className="maingalleryopen-image-front-container">
        <img
          className="maingalleryopen-image-front"
          src="./ocean-edit-bottom-f.png"
          alt="gardens 2"
        />
        <img
          className="maingalleryopen-image-back"
          src="./ocean-green.jpg"
          alt="gardens"
        />
      </div>
      <div className="maingalleryopen-para-container">
        <p className="maingalleryopen-para">
          Discover beautiful photos of individuals, couples, pets, and special
          events in our galleries.
        </p>
        <p className="maingalleryopen-para2">
          From creative shoots to wedding and engagement photography, we
          specialize in capturing unforgettable moments.
        </p>
        <p className="maingalleryopen-para3">
          Browse our galleries and book your photoshoot today!
        </p>
      </div>
    </div>
  );
}
