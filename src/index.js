import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/browser";
import bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";
import { TrackJS } from "trackjs";
import LogRocket from "logrocket";

// Sentry setup
Sentry.init({
  dsn:
    "https://cb13c6db4adc488ea0bc134a0b9fe13b@o375574.ingest.sentry.io/5195284",
});

// Bugsnag Setup
const bugsnagClient = bugsnag("f2a9c768eba12eb27bfb6593f21bd9de");
bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary = bugsnagClient.getPlugin("react");

// TrackJS
TrackJS.install({
  token: "4b5d3f4e04d648f5a8c1c76c18bf73dc",
  // for more configuration options, see https://docs.trackjs.com
});

LogRocket.init("ykhrhn/error-reporting-spike");

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
