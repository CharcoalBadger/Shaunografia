import React, { useState } from "react";
import "./pricingtier3.css";
import Booknowbutton from "./booknowbutton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Pricingtier3() {
  const [activep3, setActivep3] = useState(0);

  const handlep3Click = (index) => {
    setActivep3(index);
  };

  return (
    <div className="p3bed-content">
      <div className="content-header">
        <div className="p3s">
          <div
            className={`p3 ${activep3 === 0 ? "active" : ""}`}
            onClick={() => handlep3Click(0)}
          >
            Basic
          </div>
          <div
            className={`p3 ${activep3 === 1 ? "active" : ""}`}
            onClick={() => handlep3Click(1)}
          >
            Plus
          </div>
          <div
            className={`p3 ${activep3 === 2 ? "active" : ""}`}
            onClick={() => handlep3Click(2)}
          >
            Pro
          </div>
        </div>
      </div>
      <div className="content-body">
        {activep3 === 0 && (
          <div className="p3-content">
            <h1 className="p3-title">Forever & Always</h1>
            <div className="p3-options">
              <div className="centered-wedding">
                <div className="p3-option-group">
                  <p className="p3-wed">Weddings</p>
                  <p className="p3-cost-wed">$400+</p>
                </div>
              </div>
              <div className="engagements-and-elopements">
                <div className="divider"></div>
                <div className="p3-option-group">
                  <p className="p3-eng">Engagements</p>
                  <p className="p3-cost-eng">$200+</p>
                </div>
                <div className="divider"></div>
                <div className="p3-option-group">
                  <p className="p3-elo">Elopements</p>
                  <p className="p3-cost-elo">$300+</p>
                </div>
              </div>
            </div>
            <ul className="p3feature-list">
              <li>Two hours</li>
              <li>Shared Restricted Google Drive</li>
              <li>No limits of photos taken</li>
            </ul>
            <ul className="p3special-list">
              <li>Basic features:</li>
              <li>10x B+W copies</li>
            </ul>
            <ul className="p3option-list">
              <li>Optional:</li>
              <li>Album</li>
              <li>Names embossed</li>
            </ul>
            <Booknowbutton />
          </div>
        )}
        {activep3 === 1 && (
          <div className="p3-content">
            <h1 className="p3-title">Forever & Always</h1>
            <div className="p3-options">
              <div className="centered-wedding">
                <div className="p3-option-group">
                  <p className="p3-wed">Weddings</p>
                  <p className="p3-cost-wed">$800+</p>
                </div>
              </div>
              <div className="engagements-and-elopements">
                <div className="divider"></div>
                <div className="p3-option-group">
                  <p className="p3-eng">Engagements</p>
                  <p className="p3-cost-eng">$400+</p>
                </div>
                <div className="divider"></div>
                <div className="p3-option-group">
                  <p className="p3-elo">Elopements</p>
                  <p className="p3-cost-elo">$600+</p>
                </div>
              </div>
            </div>
            <ul className="p3feature-list">
              <li>Four hours</li>
              <li>Shared Restricted Google Drive</li>
              <li>No limits of photos taken</li>
            </ul>
            <ul className="p3special-list">
              <li>Plus features:</li>
              <li>10x B+W copies</li>
              <li>5x (20 x 15cm) photo frames of your choice</li>
            </ul>
            <ul className="p3option-list">
              <li>Optional:</li>
              <li>Album</li>
              <li>Names embossed</li>
            </ul>
            <Booknowbutton />
          </div>
        )}
        {activep3 === 2 && (
          <div className="p3-content">
            <h1 className="p3-title">Forever & Always</h1>
            <div className="p3-options">
              <div className="centered-wedding">
                <div className="p3-option-group">
                  <p className="p3-wed">Weddings</p>
                  <p className="p3-cost-wed">$1500+</p>
                </div>
              </div>
              <div className="engagements-and-elopements">
                <div className="divider"></div>
                <div className="p3-option-group">
                  <p className="p3-eng">Engagements</p>
                  <p className="p3-cost-eng">$750+</p>
                </div>
                <div className="divider"></div>
                <div className="p3-option-group">
                  <p className="p3-elo">Elopements</p>
                  <p className="p3-cost-elo">$900+</p>
                </div>
              </div>
            </div>
            <ul className="p3feature-list">
              <li>Eight hours</li>
              <li>Shared Restricted Google Drive</li>
              <li>No limits of photos taken</li>
            </ul>
            <ul className="p3special-list">
              <li>Pro features:</li>
              <li>10x B+W copies</li>
              <li>5x (20 x 15cm) photo frames of your choice</li>
              <li>1x Poster (up to 1.2m x 1.2m) Original/B+W</li>
            </ul>
            <ul className="p3option-list">
              <li>Optional:</li>
              <li>Album</li>
              <li>Names embossed</li>
            </ul>
            <Booknowbutton />
          </div>
        )}
      </div>
    </div>
  );
}
