import React, { useState } from "react";
import "./pricingtier2.css";
import Booknowbutton from "./booknowbutton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricingtier2() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabbed-content">
      <div className="content-header">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 0 ? "active" : ""}`}
            onClick={() => handleTabClick(0)}
          >
            Basic
          </div>
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Plus
          </div>
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Pro
          </div>
        </div>
      </div>
      <div className="content-body">
        {activeTab === 0 && (
          <div className="tab-content">
            <h1 className="tab-title">Inspired Muses</h1>
            <div className="tab-options">
              <div className="tab-option-group">
                <p className="tab-ind">Individual</p>
                <p className="tab-cost-ind">$125</p>
              </div>
              <div className="divider"></div>
              <div className="tab-option-group">
                <p className="tab-duo">Duo</p>
                <p className="tab-cost-duo">$225</p>
              </div>
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
        {activeTab === 1 && (
          <div className="tab-content">
            <h1 className="tab-title">Inspired Muses</h1>
            <div className="tab-options">
              <div className="tab-option-group">
                <p className="tab-ind">Individual</p>
                <p className="tab-cost-ind">$220</p>
              </div>
              <div className="divider"></div>
              <div className="tab-option-group">
                <p className="tab-duo">Duo</p>
                <p className="tab-cost-duo">$320</p>
              </div>
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
        {activeTab === 2 && (
          <div className="tab-content">
            <h1 className="tab-title">Inspired Muses</h1>
            <div className="tab-options">
              <div className="tab-option-group">
                <p className="tab-ind">Individual</p>
                <p className="tab-cost-ind">$280</p>
              </div>
              <div className="divider"></div>
              <div className="tab-option-group">
                <p className="tab-duo">Duo</p>
                <p className="tab-cost-duo">$380</p>
              </div>
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
  );
}
