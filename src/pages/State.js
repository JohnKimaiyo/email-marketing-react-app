import React from "react";
import state from "../images/state.jpg";

import "../App.css";
export default function State() {
  return (
    <div className="App">
      <h1>Count by state</h1>
      <img src={state} height={900} width={1300} />
    </div>
  );
}
