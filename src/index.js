import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/browser";
import bugsnag from "@bugsnag/js";
import bugsnagReact from "@bugsnag/plugin-react";

// Sentry setup
Sentry.init({
  dsn:
    "https://cb13c6db4adc488ea0bc134a0b9fe13b@o375574.ingest.sentry.io/5195284",
});

// Bugsnag Setup
const bugsnagClient = bugsnag("f2a9c768eba12eb27bfb6593f21bd9de");
bugsnagClient.use(bugsnagReact, React);
const ErrorBoundary = bugsnagClient.getPlugin("react");

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
