import React, { useState, useEffect } from "react";
import "./navbar.css";
import Hamburger from "./hamburger";
import Navright from "./navright";
// import DarkMode from "./DarkMode";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar({ isSplitActive }) {
  //this is to handle the logo home button
  const handleImageButtonClick = () => {
    setTimeout(() => {
      window.location.href = "/";
    });
  };

  // This is to dynamically load certain components based on width of screen sizes
  const [isNav, setNav] = useState(window.innerWidth > 1024);

  const updateNav = () => {
    setNav(window.innerWidth > 1024);
  };

  useEffect(() => {
    updateNav();
    console.log(window.innerWidth);
    window.addEventListener("resize", updateNav);
    return () => window.removeEventListener("resize", updateNav);
  });

  const animationSplitn = () => {
    // Put the animations you want to run when Split component is active
    gsap.from(".navbar-main-container", {
      opacity: 0,
      duration: 2.5,
      ease: "power4.inOut",
    });

    gsap.fromTo(
      ".nav-name",
      {
        opacity: 0,
      },
      {
        opacity: 0.7,
        duration: 2.5,
        delay: 3.5,
        ease: "power4.inOut",
      }
    );
    gsap.fromTo(
      ".nav-logo",
      {
        opacity: 0,
      },
      {
        opacity: 0.9,
        duration: 2.5,
        delay: 3.5,
        ease: "power4.inOut",
      }
    );
  };

  const animationDefaultn = () => {
    // Put the animations you want to run when Split component is NOT active
    gsap.from(".navbar-main-container", {
      opacity: 0,
      duration: 2.5,
      ease: "power4.inOut",
    });

    gsap.fromTo(
      ".nav-name",
      {
        opacity: 0,
      },
      {
        opacity: 0.7,
        duration: 2.5,

        ease: "power4.inOut",
      }
    );
    gsap.fromTo(
      ".nav-logo",
      {
        opacity: 0,
      },
      {
        opacity: 0.9,
        duration: 2.5,

        ease: "power4.inOut",
      }
    );
  };
  // Other code remains the same

  useEffect(() => {
    if (isSplitActive) {
      animationSplitn();
    } else {
      animationDefaultn();
    }
  });

  return (
    <div className="navbar-main-container">
      <div>
        <nav className="navbar-container">
          <button
            className="navbar-left-button"
            onClick={handleImageButtonClick}
          >
            <img
              className="nav-logo"
              src="/logo-final-green.png"
              alt="LogoWhite"
            />

            <h3 className="nav-name">Shaunografia</h3>
            <div className="nav-underline"></div>
          </button>
        </nav>

        {isNav ? (
          <div className="nav-right">
            {/* <div className="nav-darkmode">
              <DarkMode />
            </div> */}
            <Navright isSplitActive={isSplitActive} />
          </div>
        ) : (
          <div>
            <Hamburger />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
