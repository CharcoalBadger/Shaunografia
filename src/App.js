import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./navbar";
import Landingpage from "./landingpage";
import Aboutsection from "./aboutsection";
import Creative from "./creative";
import Wedding from "./wedding";
import Event from "./event";
import Pricing from "./pricing";
import Maincontact from "./maincontact";
import Footer from "./footer";
import Aboutstar from "./aboutstar";

function App() {
  // This is to dynamically load certain components based on width of screen sizes
  const [isApp, setApp] = useState(window.innerWidth > 767);

  const updateApp = () => {
    setApp(window.innerWidth > 767);
  };

  useEffect(() => {
    updateApp();
    window.addEventListener("resize", updateApp);
    return () => window.removeEventListener("resize", updateApp);
  });

  return (
    <div className="App">
      <Aboutstar />
      <div className="main-content">
        <div className="app-anim-min"></div>
        <div className="app-block"></div>
        <div className="app-anim-max"></div>
        <div className="section-1">
          <Navbar />
        </div>
        <div className="section-2">
          <Landingpage />
        </div>
      </div>
      <div className="section-3">
        <Aboutsection />
      </div>
      <div className="section-4">
        <Creative />
      </div>
      <div className="section-5">
        <Wedding />
      </div>
      <div className="section-6">
        <Event />
      </div>
      <div className="section-7">
        <Pricing />
      </div>
      <div className="section-8">{isApp ? <div></div> : <Maincontact />}</div>
      <div className="section-9">
        <Footer />
      </div>
    </div>
  );
}

export default App;
