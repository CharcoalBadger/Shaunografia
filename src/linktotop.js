import React from "react";
import "./linktotop.css";
import { Link } from "react-router-dom";

const ScrollToTopLink = ({ to, onClick, children, ...props }) => {
  const handleClick = (event) => {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
