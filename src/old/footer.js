import React from 'react';
import './App.css';

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'black'}}>
      <div className="footer-container">
        <div className="footer-left">
          <p>© Copyright 2023 | All Rights Reserved</p>
        </div>
        <div className="footer-right">
            <p className='follow'>
                Follow my work
            </p>
          <div className="social-icons">
            <a href="https://www.instagram.com/shaunografia/">
              <img className='instagram-white' src="/insta-white-2.png" alt="Instagram" />
            </a>
            <a href="https://www.pexels.com/@shaunografia/">
              <img className='pexels-white' src="/pexel-white-1.png" alt="Pexel" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
