import React, { useState } from "react";
import "./pricingtier2.css";
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
            <div className="tab-title">Inspired Muses</div>
            <div className="tab-subtitle">Individual & Duo Collaborations</div>
            <div className="tab-subtitle">$225</div>
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
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <div className="tab-title">Inspired Muses</div>
            <div className="tab-subtitle">Individual & Duo Collaborations</div>
            <div className="tab-subtitle">$320</div>
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
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <div className="tab-title">Inspired Muses</div>
            <div className="tab-subtitle">Individual & Duo Collaborations</div>
            <div className="tab-subtitle">$380</div>
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
          </div>
        )}
      </div>
    </div>
  );
}
