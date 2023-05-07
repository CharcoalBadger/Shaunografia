import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./split.css";

function Split({ setIsSplitMounted }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Animate the progress bars
    gsap.to(".progress-bar-top", {
      width: "100%",
      duration: 4.5,
      ease: "power3.inOut",
    });
    gsap.to(".progress-bar-bottom", {
      width: "100%",
      duration: 4.5,
      ease: "power3.inOut",
    });

    // Wait for keyframe animation to complete (assuming 4.5s duration)
    setTimeout(() => {
      gsap.to(".typewriter h1", {
        y: "-100%",
        opacity: 0,
        duration: 2,
        ease: "power3.inOut",
      });
    }, 3500);

    gsap.to([".block-top", ".progress-bar-top"], {
      top: "-50%",
      ease: "power3.inOut",
      delay: 4.5,
    });

    gsap.to([".block-bottom", ".progress-bar-bottom"], {
      bottom: "-50%",
      ease: "power3.inOut",
      delay: 4.5,
      onComplete: () => {
        document.body.style.overflow = "";
        setIsSplitMounted(true); // Set the state variable to true
      },
    });

    // Hide progress bars when the blocks start moving
    gsap.to([".progress-bar-top", ".progress-bar-bottom"], {
      opacity: 0,
      duration: 0.1,
      delay: 4.4,
    });
  }, [setIsSplitMounted]);

  return (
    <div className="opener-container">
      <div className="typewriter">
        <h1>Welcome To Shaunografia</h1>
      </div>
      <div className="blocks">
        <div className="block block-top"></div>
        <div className="block block-bottom"></div>
      </div>
      <div className="progress-bar-top"></div>
      <div className="progress-bar-bottom"></div>
    </div>
  );
}

export default Split;
