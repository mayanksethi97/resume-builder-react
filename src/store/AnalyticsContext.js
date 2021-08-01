import React from "react";
import GA4React from "ga-4-react";

const Analytics = React.createContext(
    {
        log: () => {},
        sendEvent: () => {},
        pageView: () => {}
    }
)

export const AnalyticsContextProvider = (props) => {
    const ga4react = new GA4React("G-8PWL50NSDP");

  function log(event) {
    console.log(`%c${event}`, "color:orange");
  }

  function sendEvent(event) {
    ga4react.initialize().then(
      (ga4) => {
        ga4.event(event);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  function pageView() {
    if (typeof window !== "undefined") {
      ga4react.initialize().then(
        (ga4) => {
          ga4.pageview(`/${window.location.pathname}`);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  const contextValue = {
    log: log,
    sendEvent: sendEvent,
    pageView: pageView,
  };

  return (
    <Analytics.Provider value={contextValue}>
      {props.children}
    </Analytics.Provider>
  );
}

export default Analytics;
