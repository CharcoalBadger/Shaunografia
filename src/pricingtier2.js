import React, { useState } from "react";
import "./pricingtier2.css";
import Booknowbutton from "./booknowbutton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricingtier2() {
  const [activep2, setActivep2] = useState(0);

  const handlep2Click = (index) => {
    setActivep2(index);
  };

  return (
    <div className="p2bed-content">
      <div className="p2main-content">
        <div className="p2content-header">
          <div className="p2s">
            <div
              className={`p2 ${activep2 === 0 ? "active" : ""}`}
              onClick={() => handlep2Click(0)}
            >
              Basic
            </div>
            <div
              className={`p2 ${activep2 === 1 ? "active" : ""}`}
              onClick={() => handlep2Click(1)}
            >
              Plus
            </div>
            <div
              className={`p2 ${activep2 === 2 ? "active" : ""}`}
              onClick={() => handlep2Click(2)}
            >
              Pro
            </div>
          </div>
        </div>
        <div className="p2content-body">
          {activep2 === 0 && (
            <div className="p2-content">
              <h1 className="p2-title">Inspired Muses</h1>
              <div className="p2-options">
                <div className="p2-option-group">
                  <p className="p2-ind">Individual</p>
                  <p className="p2-cost-ind">$125</p>
                </div>
                <div className="divider"></div>
                <div className="p2-option-group">
                  <p className="p2-duo">Duo</p>
                  <p className="p2-cost-duo">$225</p>
                </div>
              </div>
              <ul className="p2feature-list">
                <li>Up to three hours</li>
                <li>Shared Restricted Google Drive</li>
                <li>No limits of photos taken</li>
                <li>Editing and post-processing included</li>
              </ul>
              <ul className="p2option-list">
                <li>Optional:</li>
                <li>1x Poster (up to 1.2m x 1.2m) Original/B+W</li>
              </ul>
              <Booknowbutton />
            </div>
          )}
          {activep2 === 1 && (
            <div className="p2-content">
              <h1 className="p2-title">Inspired Muses</h1>
              <div className="p2-options">
                <div className="p2-option-group">
                  <p className="p2-ind">Individual</p>
                  <p className="p2-cost-ind">$220</p>
                </div>
                <div className="divider"></div>
                <div className="p2-option-group">
                  <p className="p2-duo">Duo</p>
                  <p className="p2-cost-duo">$320</p>
                </div>
              </div>
              <ul className="p2feature-list">
                <li>Four or more hours</li>
                <li>Shared Restricted Google Drive</li>
                <li>No limits of photos taken</li>
                <li>Editing and post-processing included</li>
              </ul>
              <ul className="p2option-list">
                <li>Optional:</li>
                <li>1x Poster (up to 1.2m x 1.2m) Original/B+W</li>
              </ul>
              <Booknowbutton />
            </div>
          )}
          {activep2 === 2 && (
            <div className="p2-content">
              <h1 className="p2-title">Inspired Muses</h1>
              <div className="p2-options">
                <div className="p2-option-group">
                  <p className="p2-ind">Individual</p>
                  <p className="p2-cost-ind">$280</p>
                </div>
                <div className="divider"></div>
                <div className="p2-option-group">
                  <p className="p2-duo">Duo</p>
                  <p className="p2-cost-duo">$380</p>
                </div>
              </div>
              <ul className="p2feature-list">
                <li>Six hours max</li>
                <li>Shared Restricted Google Drive</li>
                <li>No limits of photos taken</li>
                <li>Editing and post-processing included</li>
              </ul>
              <ul className="p2option-list">
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
