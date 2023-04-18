import React, { useState, useEffect } from "react";
import "./footer.css";
// import { Link } from "react-router-dom";
import Maincontact from "./maincontact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  // This is to dynamically load certain components based on width of screen sizes
  const [isFooter, setFooter] = useState(window.innerWidth > 767);

  const updateFooter = () => {
    setFooter(window.innerWidth > 767);
  };

  useEffect(() => {
    updateFooter();
    window.addEventListener("resize", updateFooter);
    return () => window.removeEventListener("resize", updateFooter);
  });

  useEffect(() => {
    gsap.from(".footer-insta-white", {
      scrollTrigger: {
        trigger: ".footer-section-inner p",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.5,
    });

    gsap.from(".footer-pexel-white", {
      scrollTrigger: {
        trigger: ".footer-section-inner p",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.6,
    });

    gsap.from(".footer-section-inner p", {
      scrollTrigger: {
        trigger: ".footer-section-inner p",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      stagger: 0.1,
      y: 100,
      duration: 1.7,
    });

    gsap.from(".footer-links", {
      scrollTrigger: {
        trigger: ".footer-section-inner p",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      duration: 1.8,
    });

    gsap.from(".footer-button", {
      scrollTrigger: {
        trigger: ".footer-section-inner p",
        start: "top 80%",
        end: "bottom 400px",
      },
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      opacity: 0,
      ease: "power4.inOut",
      y: 100,
      stagger: 0.1,
      duration: 1.6,
    });
  }, []);

  return (
    <div className="footer-section-container">
      <div className="footer-layout-container">
        <div className="footer-section-inner">
          <h3 className="footer-follow">Follow My Work</h3>
          <div className="footer-section-side">
            <div className="footer-social-icons">
              <div className="footer-insta">
                <a href="https://www.instagram.com/shaunografia/">
                  <img
                    className="footer-insta-white"
                    src="/insta-white-green.png"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.instagram.com/shaunografia/">
                  <p>Instagram.com/Shaunografia</p>
                </a>
              </div>
              <div className="footer-pexel">
                <a href="https://www.pexels.com/@shaunografia/">
                  <img
                    className="footer-pexel-white"
                    src="/pexel-white-green.png"
                    alt="Pexel"
                  />
                </a>
                <a href="https://www.pexels.com/@shaunografia/">
                  <p>Pexels.com/@Shaunografia</p>
                </a>
              </div>
            </div>

            <div className="footer-link-container">
              <h3 className="footer-links">Useful links</h3>
              <Linktotop to="/" className="footer-button">
                Home
              </Linktotop>
              <Linktotop to="/galleries" className="footer-button">
                Galleries
              </Linktotop>
              <Linktotop to="/pricing" className="footer-button">
                Pricing
              </Linktotop>
              <Linktotop to="/About" className="footer-button">
                About
              </Linktotop>
              <Linktotop to="/Contact" className="footer-button">
                Contact
              </Linktotop>
            </div>
          </div>
        </div>
        {isFooter ? (
          <div className="footer-contact">
            <Maincontact />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="footer-ending">
        <p className="footer-copyright">
          Copyright © 2023 Shaunografia. All rights reserved.
        </p>
        <Linktotop to="/Contact" className="footer-privacy">
          Privacy policy
        </Linktotop>
        <Linktotop to="/Contact" className="footer-sitemap">
          Sitemap
        </Linktotop>
      </div>
    </div>
  );
}
