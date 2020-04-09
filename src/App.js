import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const tools = [
  "Sentry",
  "Bugsnag",
  "Raygun",
  "TrackJS",
  "Usersnap",
  "LogRocket",
];

function App() {
  const allowedClicks = 5;
  const [count, setCount] = useState(0);
  const list = {}; //object

  if (count > allowedClicks) {
    list.push(45); // list.push is not a function
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {tools.map((t) => (
            <code key={t}>{t} </code>
          ))}
        </p>

        <button onClick={() => setCount(count + 1)}>Button</button>
        <p>
          If the button is clicked more than <code>{allowedClicks}</code> times
          the app will crash.
        </p>
        <p>
          Button clicked <code>{count}</code> times.
        </p>
      </header>
    </div>
  );
}

export default App;
