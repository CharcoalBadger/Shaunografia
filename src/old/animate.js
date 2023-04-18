import React from "react";
import './animate.css';
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Animate = () => {
  
    gsap.to(".box-a",{
      scrollTrigger: {
        trigger: ".box-a",
        start: "top center",
        end: "top top",
        scrub: true,
        markers: true
      },
      x: 700,
      rotation: 360,
      ease: "none",
      duration: 2.3
    });


    let tl = gsap.timeline({ defaults : { ease: "power4.inOut", duration: 2}});

    tl.from('.box-b',{
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 0,
      y: 100,
      duration: 2.2
    })
    .from(".box-c",{
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 0,
      y: 200,
      duration: 2.2
    }, "-=2")
    .from('.card-b, .card-c',{
      scaleY: 0, stagger: .2
    }, "-=2")


    return (







      
      <div className="animate-container">
        <div className="box-container">
          <div className="box-a">a</div>
          <div className="box-b">b</div>
          <div className="box-c">c</div>
          <div className="card-a">a</div>
          <div className="card-b">b</div>
          <div className="card-c">c</div>
        </div>
      </div>
    );
  };
  
  export default Animate;
  