import React, { useState, useEffect } from "react";
import "./shortfooter.css";
// import { Link } from "react-router-dom";
import Maincontact from "./maincontact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";
gsap.registerPlugin(ScrollTrigger);

export default function Shortfooter() {
  // This is to dynamically load certain components based on width of screen sizes
  const [isShort, setShort] = useState(window.innerWidth > 767);

  const updateShort = () => {
    setShort(window.innerWidth > 767);
  };

  useEffect(() => {
    updateShort();
    window.addEventListener("resize", updateShort);
    return () => window.removeEventListener("resize", updateShort);
  });

  // useEffect(() => {
  //   gsap.from(".shortfooter-insta-white", {
  //     scrollTrigger: {
  //       trigger: ".shortfooter-section-inner p",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     duration: 1.5,
  //   });

  //   gsap.from(".shortfooter-pexel-white", {
  //     scrollTrigger: {
  //       trigger: ".shortfooter-section-inner p",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     duration: 1.6,
  //   });

  //   gsap.from(".shortfooter-section-inner p", {
  //     scrollTrigger: {
  //       trigger: ".shortfooter-section-inner p",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     stagger: 0.1,
  //     y: 100,
  //     duration: 1.7,
  //   });

  //   gsap.from(".shortfooter-links", {
  //     scrollTrigger: {
  //       trigger: ".shortfooter-section-inner p",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     duration: 1.8,
  //   });

  //   gsap.from(".shortfooter-button", {
  //     scrollTrigger: {
  //       trigger: ".shortfooter-section-inner p",
  //       start: "top 80%",
  //       end: "bottom 400px",
  //     },
  //     "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
  //     opacity: 0,
  //     ease: "power4.inOut",
  //     y: 100,
  //     stagger: 0.1,
  //     duration: 1.6,
  //   });
  // }, []);

  return (
    <div className="shortfooter-section-container">
      <div className="shortfooter-layout-container">
        <div className="shortfooter-section-inner">
          <h3 className="shortfooter-follow">Follow My Work</h3>
          <div className="shortfooter-section-side">
            <div className="shortfooter-social-icons">
              <div className="shortfooter-insta">
                <a href="https://www.instagram.com/shaunografia/">
                  <img
                    className="shortfooter-insta-white"
                    src="/insta-white-green.png"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.instagram.com/shaunografia/">
                  <p>Instagram.com/Shaunografia</p>
                </a>
              </div>
              <div className="shortfooter-pexel">
                <a href="https://www.pexels.com/@shaunografia/">
                  <img
                    className="shortfooter-pexel-white"
                    src="/pexel-white-green.png"
                    alt="Pexel"
                  />
                </a>
                <a href="https://www.pexels.com/@shaunografia/">
                  <p>Pexels.com/@Shaunografia</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        {isShort ? (
          <div className="shortfooter-contact">
            <Maincontact />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="shortfooter-ending">
        <p className="shortfooter-copyright">
          Copyright © 2023 Shaunografia. All rights reserved.
        </p>
        <Linktotop to="/Contact" className="shortfooter-privacy">
          Privacy policy
        </Linktotop>
        <a
          href="/sitemap.xml"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-sitemap"
        >
          Sitemap
        </a>
      </div>
    </div>
  );
}
