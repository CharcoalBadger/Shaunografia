import React, { useState, useEffect } from "react";
import Opener from "./opener";
import Carousel from "./carousel";

function Intro() {
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimationDone(true);
    }, 9000); // 5000ms = 5s, adjust the duration as needed
  }, []);

  return (
    <div className="intro">
      {!animationDone ? (
        <Opener />
      ) : (
        <Carousel />
      )}
    </div>
  );
};

export default Intro;
