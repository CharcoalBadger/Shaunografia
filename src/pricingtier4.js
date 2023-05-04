import React, { useState } from "react";
import "./pricingtier4.css";
import Booknowbutton from "./booknowbutton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricingtier4() {
  const [activep4, setActivep4] = useState(0);

  const handlep4Click = (index) => {
    setActivep4(index);
  };

  return (
    <div className="p4bed-content">
      <div className="p4main-content">
        <div className="p4content-header">
          <div className="p4s">
            <div
              className={`p4 ${activep4 === 0 ? "active" : ""}`}
              onClick={() => handlep4Click(0)}
            >
              Basic
            </div>
            <div
              className={`p4 ${activep4 === 1 ? "active" : ""}`}
              onClick={() => handlep4Click(1)}
            >
              Plus
            </div>
            <div
              className={`p4 ${activep4 === 2 ? "active" : ""}`}
              onClick={() => handlep4Click(2)}
            >
              Pro
            </div>
          </div>
        </div>
        <div className="p4content-body">
          {activep4 === 0 && (
            <div className="p4-content">
              <h1 className="p4-title">Embracing The Energy</h1>
              <div className="p4-options">
                <div className="p4-option-group">
                  <p className="p4-ind">Event or Festival</p>
                  <p className="p4-cost-ind">$200+</p>
                </div>
                {/* <div className="divider"></div>
              <div className="p4-option-group">
                <p className="p4-duo">Duo</p>
                <p className="p4-cost-duo">$225</p>
              </div> */}
              </div>
              <ul className="feature-list">
                <li>Up to three hours</li>
                <li>Shared Restricted Google Drive</li>
                <li>No limits of photos taken</li>
                <li>Editing and post-processing included</li>
              </ul>
              <ul className="option-list">
                <li>Optional:</li>
                <li>1x Poster (up to 1.2m x 1.2m) Original/B+W</li>
              </ul>
              <Booknowbutton />
            </div>
          )}
          {activep4 === 1 && (
            <div className="p4-content">
              <h1 className="p4-title">Embracing The Energy</h1>
              <div className="p4-options">
                <div className="p4-option-group">
                  <p className="p4-ind">Event or Festival</p>
                  <p className="p4-cost-ind">$400+</p>
                </div>
                {/* <div className="divider"></div>
              <div className="p4-option-group">
                <p className="p4-duo">Duo</p>
                <p className="p4-cost-duo">$320</p>
              </div> */}
              </div>
              <ul className="feature-list">
                <li>Four or more hours</li>
                <li>Shared Restricted Google Drive</li>
                <li>No limits of photos taken</li>
                <li>Editing and post-processing included</li>
              </ul>
              <ul className="option-list">
                <li>Optional:</li>
                <li>1x Poster (up to 1.2m x 1.2m) Original/B+W</li>
              </ul>
              <Booknowbutton />
            </div>
          )}
          {activep4 === 2 && (
            <div className="p4-content">
              <h1 className="p4-title">Embracing The Energy</h1>
              <div className="p4-options">
                <div className="p4-option-group">
                  <p className="p4-ind">Event or Festival</p>
                  <p className="p4-cost-ind">$750+</p>
                </div>
                {/* <div className="divider"></div>
              <div className="p4-option-group">
                <p className="p4-duo">Duo</p>
                <p className="p4-cost-duo">$380</p>
              </div> */}
              </div>
              <ul className="feature-list">
                <li>Six hours max</li>
                <li>Shared Restricted Google Drive</li>
                <li>No limits of photos taken</li>
                <li>Editing and post-processing included</li>
              </ul>
              <ul className="option-list">
                <li>Optional:</li>
                <li>1x Poster (up to 1.2m x 1.2m) Original/B+W</li>
              </ul>
              <Booknowbutton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
