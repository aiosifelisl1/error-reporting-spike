import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

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
        <button onClick={() => setCount(count + 1)}>Button</button>
        <p>
          If the button is clicked more than <code>{allowedClicks}</code> times
          the app will crash.
        </p>
        <p>
          Button clicked <code>{count}</code> times.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
