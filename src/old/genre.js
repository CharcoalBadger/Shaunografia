import React, { useEffect } from "react";
import "./genre.css";
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Genre() {

  const images = [
    {
      src:
        "creative-portrait-1.jpg",
      caption: "Creative Portaits"
    },
    {
      src:
        "parrot.jpg",
      caption: ""
    },
    {
      src:
        "forest.jpg",
      caption: "Events"
    },
    {
      src: "street.jpg",
      caption: ""
    },
    {
      src: "ocean.jpg",
      caption: "Weddings & Elopments"
    },
    {
      src: "path.jpg",
      caption: ""
    },
    {
      src: "beach-guy.jpg",
      caption: ""
    },
    {
      src: "bee.jpg",
      caption: ""
    },
    {
      src:"redsky.jpg",
      caption: "Couples"
    },
    {
      src: "ship.jpg",
      caption: ""
    }
  ];

  useEffect(() => {
    gsap.from('figure', {
      scrollTrigger: {
        trigger: "figure.pic1",
        start: "bottom 800px",
        end: "top center",
        markers: true
      },
      opacity: 0,
      ease: "power1.inOut",
      stagger: .2,
      y: 200,
      duration: 2.2
    });
  }, []);

/*     gsap.from('.figure',{
      scrollTrigger: {
        trigger: "figure.pic1",
        start: "bottom 800px",
        end: "top center",
        markers: true
      },
      opacity: 0,
      ease: "power1.inOut",
      stagger: .2,
      rotation: 50,
      y: 200,
      duration: 2.2
    }); */


/*     .from("figure.pic2",{
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 0,
      y: 200,
      duration: 2.2
    }, "-=2")
    .from('figure.pic3',{
      scaleY: 0, stagger: .2
    }, "-=2") */


  return (
    <div className="polaroid-background">
      <div className="polaroid-gallery">
        {images.map((image, index) => (
          <figure key={index} className={`pic${index + 1}`}>
            <img className="polaroid-img" src={image.src} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
      </div>
)};
