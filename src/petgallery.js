import React, { useState, useEffect, useMemo } from "react";
import { useSwipeable } from "react-swipeable";
import "./petgallery.css";
import "./modal.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

gsap.registerPlugin(ScrollTrigger);

export default function Petgallery() {
  const images = useMemo(
    () => [
      {
        path: "/main-pet-6.jpg",
        alt: "Train photoshoot with pet 1",
        title: "Ahoy!",
      },
      {
        path: "/main-pet-1.jpg",
        alt: "Train tracks photoshoot with pet 1",
        alt2: "For Fun",
        title: "Fixing My Hair",
      },
      {
        path: "/main-pet-3.jpg",
        alt: "River photoshoot with pet 1",
        title: "Floatin'",
      },
      {
        path: "/main-pet-2.jpg",
        alt: "Train photoshoot with pet 2",
        title: "Fancy",
      },
      {
        path: "/main-pet-4.jpg",
        alt: "Train tracks photoshoot with pet 2",
        title: "Train Track Hike",
      },
      {
        path: "/main-pet-5.jpg",
        alt: "River photoshoot with pet 1",
        title: "Contemplation",
      },
    ],
    []
  );

  const imagesMobile = useMemo(
    () => [
      {
        path: "/main-pet-4.jpg",
        alt: "Train photoshoot with pet 1",
        title: "Ahoy!",
      },
      {
        path: "/main-pet-3.jpg",
        alt: "Train tracks photoshoot with pet 1",
        alt2: "For Fun",
        title: "Fixing My Hair",
      },
      {
        path: "/main-pet-1.jpg",
        alt: "River photoshoot with pet 1",
        title: "Floatin'",
      },
      {
        path: "/main-pet-6.jpg",
        alt: "Train photoshoot with pet 2",
        title: "Fancy",
      },
      {
        path: "/main-pet-2.jpg",
        alt: "Train tracks photoshoot with pet 2",
        title: "Train Track Hike",
      },
      {
        path: "/main-pet-5.jpg",
        alt: "River photoshoot with pet 1",
        title: "Contemplation",
      },
    ],
    []
  );

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [displayedImages, setDisplayedImages] = useState(images);

  useEffect(() => {
    const updateImagesArray = () => {
      if (window.innerWidth < 1366) {
        setDisplayedImages(imagesMobile);
      } else {
        setDisplayedImages(images);
      }
    };

    updateImagesArray();

    window.addEventListener("resize", updateImagesArray);

    return () => {
      window.removeEventListener("resize", updateImagesArray);
    };
  }, [images, imagesMobile]);

  const toggleBodyScroll = () => {
    if (document.body.classList.contains("modal-open")) {
      document.body.style.overflow = "initial";
    } else {
      document.body.style.overflow = "hidden";
    }
    document.body.classList.toggle("modal-open");
  };

  const openModal = (index) => {
    setSelectedImageIndex(index);
    toggleBodyScroll();
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    if (document.body.classList.contains("modal-open")) {
      toggleBodyScroll();
    }
  };

  const [direction, setDirection] = useState("slide-right");

  const slideLeft = () => {
    const nextIndex = selectedImageIndex - 1;
    if (nextIndex < 0) {
      setSelectedImageIndex(displayedImages.length - 1);
    } else {
      setSelectedImageIndex(nextIndex);
    }
    setDirection("slide-left");
  };

  const slideRight = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % displayedImages.length);
    setDirection("slide-right");
  };

  const childFactory = (direction) => (child) => {
    return React.cloneElement(child, {
      classNames: direction,
      style: { position: "absolute", width: "100%", height: "100%" },
    });
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => slideLeft(),
    onSwipedRight: () => slideRight(),
    delta: 30,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <>
      <div className="gallery">
        {displayedImages.map((image, index) => {
          return (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openModal(index)}
            >
              <div className="image-container">
                <LazyLoadImage
                  src={image.path}
                  alt={image.alt}
                  title={image.title}
                  effect="opacity"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          );
        })}
      </div>
      {selectedImageIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            {...swipeHandlers}
          >
            <div className="modal-image-container">
              <div
                className="modal-image-background"
                style={{
                  "--image-path": `url(${displayedImages[selectedImageIndex].path})`,
                }}
              ></div>
              <TransitionGroup childFactory={childFactory(direction)}>
                <CSSTransition
                  key={displayedImages[selectedImageIndex].path}
                  timeout={1000}
                  classNames={direction}
                >
                  <img
                    className="modal-image"
                    src={displayedImages[selectedImageIndex].path}
                    alt={displayedImages[selectedImageIndex].alt}
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </CSSTransition>
              </TransitionGroup>
            </div>

            <div className="image-info">
              {/* <p className="modal-title">{images[selectedImageIndex].title}</p> */}
              {/* Add more information like likes, comments, etc. here */}
            </div>
          </div>
          <span className="modal-close" onClick={closeModal}>
            &times;
          </span>
          <div
            className="arrow arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              slideLeft();
            }}
          >
            &#10094;
          </div>
          <div
            className="arrow arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              slideRight();
            }}
          >
            &#10095;
          </div>
        </div>
      )}
    </>
  );
}
