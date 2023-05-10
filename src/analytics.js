import ReactGA from "react-ga";

const trackingId = "G-CS9K2PFGY7";

ReactGA.initialize(trackingId);

export const trackPageView = (url) => {
  ReactGA.set({ page: url });
  ReactGA.pageview(url);
};
