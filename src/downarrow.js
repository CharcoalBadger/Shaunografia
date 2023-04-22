import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Downarrow() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".scroll-down", { duration: 1, y: 15, ease: "easeInOut" });

    gsap.to(".scroll-down", {
      scrollTrigger: {
        trigger: ".scroll-down",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: "100", // Adjust this value to control how far the arrow moves downwards
      opacity: 0,
      ease: "none",
    });
  }, []);
  return (
    <svg
      className="scroll-down"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.293 6.293L12 14l7.707-7.707-1.414-1.414L12 11.172 5.707 4.879 4.293 6.293z"
        fill="currentColor"
      />
    </svg>
  );
}
