import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./opener.css";
import Carousel from "./carousel";

function Opener() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    gsap.from(".semi-circles", 0.8, {
      //this makes them appear before the animation
      opacity: 0,
      ease: "power3.inOut",
      stagger: 0.1,
    });

    gsap.to(".semi-circles", 1, {
      visibility: "hidden",
      ease: "power3.inOut",
      delay: 5,
    });

    gsap.to(".top-semi", 1, {
      left: "35%",
      ease: "power3.inOut",
      delay: 1,
    });

    gsap.to(".top-semi", 2, {
      top: "-310",
      ease: "power3.inOut",
      delay: 2,
    });

    gsap.to(".top-semi", 2, {
      opacity: 0,
      ease: "power3.inOut",
      delay: 2,
    });

    gsap.to(".top-semi", 1, {
      visibility: "hidden",
      ease: "power3.inOut",
      delay: 5,
    });

    gsap.to(".bottom-semi", 1, {
      left: "650",
      ease: "power3.inOut",
      delay: 1,
    });

    gsap.to(".bottom-semi", 2, {
      bottom: "-310",
      ease: "power3.inOut",
      delay: 2,
    });

    gsap.to(".bottom-semi", 2, {
      opacity: 0,
      ease: "power3.inOut",
      delay: 2,
    });

    gsap.to(".bottom-semi", 1, {
      visibility: "hidden",
      ease: "power3.inOut",
      delay: 5,
    });

    gsap.to(".block-top", 2, {
      top: "-50%",
      ease: "power3.inOut",
      delay: 2,
    });

    gsap.to(".block-bottom", 2, {
      bottom: "-50%",
      ease: "power3.inOut",
      delay: 2,
      onComplete: () => {
        document.body.style.overflow = "";
      },
    });
  }, []);

  return (
    <div className="opener-container">
      <div className="open-image">
        <Carousel />
      </div>
      <div className="blocks">
        <div className="block block-top"></div>
        <div className="block block-bottom"></div>
      </div>
      <div className="semi-circles">
        <div className="row">
          <div className="semi-circle top-semi">
            <img src="/logo-top.png" alt="Top half" />
          </div>
          <div className="semi-circle bottom-semi">
            <img src="/logo-bottom.png" alt="Bottom half" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Opener;
