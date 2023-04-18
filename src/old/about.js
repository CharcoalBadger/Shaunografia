import React, { useEffect } from "react";
import './about.css';
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
  gsap.from('.about-text-name h2', {
    scrollTrigger: {
      trigger: ".about-text-name h2",
      start: "top center",
      end: "top top",
      markers: true
    },
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    opacity: 0,
    ease: "power4.inOut",
    y: 0,
    duration: 2.1
  });

  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: ".about-text-name h2",
      start: "top center",
      end: "top top",
      markers: true
    },
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
    opacity: 0,
    ease: "power4.inOut",
    y: 0,
    duration: 3
  });
}, []);

  return (
    <div className="about-section">
      <div className='about-text-title'>
        <h1>- KIA ORA! -</h1>
      </div>
      <div className='about-text-name'>
        <h2>I'm Shaun (They/Them)</h2>
      </div>
      <div className="about-text">
        <p>I am a passionate photographer, with a keen eye for detail and a love for capturing the beauty of the world around me.</p>
        <p>I believe that great photography is about more than just technical skill - it's about capturing the essence of a moment and telling a story through your images.</p>
        <p>Follow my work on</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/shaunografia/">
            <img className='insta-white' src="/insta-white-2.png" alt="Instagram" />
          </a>
          <a href="https://www.pexels.com/@shaunografia/">
            <img className='pexel-white' src="/pexel-white-1.png" alt="Pexel" />
          </a>
        </div>
      </div>
      <div className='about-image-container'>
      <div className="about-image">
        <img src="/about-me-3-edit.png" alt="Photographer H785 W634"/>
      </div>
      </div>
    </div>
  );
}

export default About;
