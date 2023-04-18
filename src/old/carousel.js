import React, { useState } from "react";
import "./App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("slide-right");

  const images = ["/leila.jpg", "/redsky.jpg", "/ocean.jpg", "/ship.jpg"];
  const texts = [
    "Portraiture",
    "Sunsets & Silhouttes",
    "Natural & Beautiful",
    "Large Landscapes",
  ];

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(nextIndex);
    }
    setDirection("slide-left");
  };

  const slideRight = () => {
    setIndex((index + 1) % images.length);
    setDirection("slide-right");
  };

  const childFactory = (direction) => (child) => {
    return React.cloneElement(child, {
      classNames: direction,
      style: { position: "absolute", width: "100%", height: "100%" },
    });
  };

  return (
    images.length > 0 && (
      <div className="image-slider">
        <button className="img-left" onClick={slideLeft}>
          <img src="/left-arrow.svg" alt="Left Arrow" width="50" height="50" />
        </button>
        <div className="image-wrapper">
          <TransitionGroup childFactory={childFactory(direction)}>
            <CSSTransition
              key={images[index]}
              timeout={1000}
              classNames={direction}
            >
              <img
                src={images[index]}
                style={{ position: "absolute", width: "100%", height: "100%" }}
              />
            </CSSTransition>
          </TransitionGroup>
        </div>

        <div className="img-center">{texts[index]}</div>
        <button className="img-right" onClick={slideRight}>
          <img src="/right-arrow.svg" alt="Left Arrow" width="50" height="50" />
        </button>
      </div>
    )
  );
}
