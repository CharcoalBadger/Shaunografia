import React, { useEffect, useState } from "react";
import "./loop.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Loop() {
  const [isSize, setSize] = useState(window.innerWidth > 1900);

  const updateSize = () => {
    setSize(window.innerWidth > 1900);
    console.log("updateWidth");
  };

  useEffect(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
    console.log("looplistener");
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    let tl;
    if (window.innerWidth < 531) {
      // animation for screen sizes 700 and above
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "25rem" },
        { x: "-75rem", duration: 30, ease: "linear" }
      );
    } else if (window.innerWidth > 531 && window.innerWidth < 701) {
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "75rem" },
        { x: "-50rem", duration: 15, ease: "linear" }
      );
    } else if (window.innerWidth > 702 && window.innerWidth < 901) {
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "75rem" },
        { x: "-50rem", duration: 15, ease: "linear" }
      );
    } else if (window.innerWidth > 902 && window.innerWidth < 1101) {
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "75rem" },
        { x: "-50rem", duration: 15, ease: "linear" }
      );
    } else if (window.innerWidth > 1102 && window.innerWidth < 1301) {
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "75rem" },
        { x: "-50rem", duration: 15, ease: "linear" }
      );
    } else if (window.innerWidth > 1302 && window.innerWidth < 1501) {
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "75rem" },
        { x: "-50rem", duration: 15, ease: "linear" }
      );
    } else if (window.innerWidth > 1502 && window.innerWidth < 1801) {
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "75rem" },
        { x: "-50rem", duration: 15, ease: "linear" }
      );
    } else {
      // animation for screen sizes below 700
      tl = gsap.timeline({ repeat: -1 });
      tl.fromTo(
        ".landing-loop-title",
        { x: "75rem" },
        { x: "-50rem", duration: 15, ease: "linear" }
      );
    }
  }, [isSize]);

  return (
    <div className="landing-loop-container">
      <h1 className="landing-loop-title">SHAUNOGRAFIA</h1>
    </div>
  );
}
