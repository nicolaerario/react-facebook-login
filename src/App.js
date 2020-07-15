import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Facebook from "./components/Facebook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Facebook></Facebook>
    </div>
  );
}

export default App;
