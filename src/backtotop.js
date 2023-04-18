import React, { useEffect, useState } from "react";
import "./backtotop.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Backtotop() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 0ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setProgress(pathLength - (scroll * pathLength) / height);
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, [progress]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProgressWrapClick = (event) => {
    event.preventDefault();
    handleScrollToTop();
  };

  return (
    <div className="progress-wrap" onClick={handleProgressWrapClick}>
      <svg
        className="progress-circle svg-content"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <div className="arrow-container">
        <i className="uil uil-location-arrow-alt"></i>
      </div>
    </div>
  );
}
