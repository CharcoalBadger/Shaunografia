import React from "react";
import { useNavigate } from "react-router-dom";
import "./booknowbutton.css";

export default function Booknowbutton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactform");
  };

  return (
    <button className="book-now-button" onClick={handleClick}>
      Book Now
    </button>
  );
}
