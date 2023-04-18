import React, { useEffect, useRef } from "react";
import "./hamburger.css";
// import { Link } from "react-router-dom";
// import DarkMode from "./DarkMode";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Linktotop from "./linktotop";

gsap.registerPlugin(ScrollTrigger);

export default function Hamburger() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //this is to handle the logo home button
  const handleNavigation = () => {
    toggleBodyScroll(false); // Re-enable scrolling before navigation
    setTimeout(() => {
      window.location.href = "/";
    });
  };

  const toggleBodyScroll = (disable) => {
    document.body.style.overflow = disable ? "hidden" : "auto";
  };

  const animateMenuItems = (menuOpen) => {
    const menuItems = document.querySelectorAll(".menu ul li");
    const menu = document.querySelector(".menu");

    if (menuOpen) {
      gsap.fromTo(
        menuItems,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 0.3 }
      );
    } else {
      gsap.to(menuItems, {
        x: -100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.3,
        onComplete: () => {
          menu.style.visibility = "hidden";
          toggleBodyScroll(false); // Re-enable scrolling after closing animation
        },
      });
    }
  };

  const inputRef = useRef(null);

  const closeMenu = () => {
    inputRef.current.checked = false;
    animateMenuItems(false);
  };

  const handleMenuItemClick = (callback) => {
    closeMenu();
    setTimeout(() => {
      callback();
    }, 3000); // 3-second delay
  };

  return (
    <div className="menu-wrap">
      <input
        ref={inputRef}
        type="checkbox"
        className="hamburger-toggle"
        onClick={(e) => {
          if (e.target.checked) {
            e.target.nextElementSibling.nextElementSibling.style.visibility =
              "visible";
            toggleBodyScroll(true);
          } else {
            animateMenuItems(false); // Closing animation when unchecked
          }
        }}
        onChange={(e) => animateMenuItems(e.target.checked)}
      />

      <div className="hamburger">
        <div></div>
      </div>
      <div className="menu">
        <div></div>
        <div className="menu-items">
          <ul>
            {/* <li className="menu-darkmode">
        <DarkMode />
      </li> */}
            <li>
              <Linktotop
                to="/"
                onClick={() => {
                  handleMenuItemClick(() => {
                    handleNavigation();
                  });
                }}
              >
                Home
              </Linktotop>
            </li>
            <li>
              <Linktotop
                to="/galleries"
                onClick={() => {
                  handleMenuItemClick(() => {
                    closeMenu();
                  });
                }}
              >
                Galleries
              </Linktotop>
            </li>
            <li>
              <Linktotop to="/pricing" onClick={closeMenu}>
                Pricing
              </Linktotop>
            </li>
            <li>
              <Linktotop to="/about" onClick={closeMenu}>
                About
              </Linktotop>
            </li>
            <li>
              <Linktotop to="/contact" onClick={closeMenu}>
                Contact
              </Linktotop>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
