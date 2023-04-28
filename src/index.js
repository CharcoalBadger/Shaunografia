import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Galleries from "./pages/galleries";
import Pricingpage from "./pages/pricingpage";
import Aboutpage from "./pages/aboutpage";
import Contactpage from "./pages/contactpage";
import Creativepage from "./pages/creativepage";
import Eventpage from "./pages/eventpage";
import Petpage from "./pages/petpage";
import Bookingform from "./bookingform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "galleries",
    element: <Galleries />,
  },
  {
    path: "pricing",
    element: <Pricingpage />,
  },
  {
    path: "about",
    element: <Aboutpage />,
  },
  {
    path: "contact",
    element: <Contactpage />,
  },
  {
    path: "creativepage",
    element: <Creativepage />,
  },
  {
    path: "eventpage",
    element: <Eventpage />,
  },
  {
    path: "petpage",
    element: <Petpage />,
  },
  {
    path: "contactform",
    element: <Bookingform />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
