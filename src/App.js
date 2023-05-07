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
import Split from "./split";

// // Check if the user has visited the site before
// const isFirstVisit = !localStorage.getItem("visitedBefore");

// if (isFirstVisit) {
//   // Simulate loading process
//   const timer = setTimeout(() => {
//     setIsLoading(false);
//   }, 3000); // Change the duration as needed (in milliseconds)

//   // Set the flag in localStorage
//   localStorage.setItem("visitedBefore", "true");

//   // Clean up the timer when the component is unmounted
//   return () => clearTimeout(timer);
// } else {
//   setIsLoading(false);
// }

const isFirstVisit = !sessionStorage.getItem("visitedBefore");

if (isFirstVisit) {
  sessionStorage.setItem("visitedBefore", "true");
}

function App() {
  // Loading screen state
  // const [isLoading, setIsLoading] = useState(true);
  // This is to dynamically load certain components based on width of screen sizes
  const [isApp, setApp] = useState(window.innerWidth > 767);

  const updateApp = () => {
    setApp(window.innerWidth > 767);
  };

  useEffect(() => {
    // Simulate loading process
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000); // Change the duration as needed (in milliseconds)

    updateApp();
    window.addEventListener("resize", updateApp);

    return () => {
      window.removeEventListener("resize", updateApp);
      // clearTimeout(timer);
    };
  });

  return (
    <div className="App">
      <Aboutstar />
      {isFirstVisit && <Split />}
      <>
        <div className="section-1">
          <Navbar />
        </div>
        <div className="section-2">
          <Landingpage />
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
      </>
    </div>
  );
}

export default App;
