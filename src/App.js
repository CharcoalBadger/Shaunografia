import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./src/navbar";
import Landingpage from "./src/landingpage";
import Aboutsection from "./src/aboutsection";
import Creative from "./src/creative";
import Wedding from "./src/wedding";
import Event from "./src/event";
import Pricing from "./src/pricing";
import Maincontact from "./src/maincontact";
import Footer from "./src/footer";

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
