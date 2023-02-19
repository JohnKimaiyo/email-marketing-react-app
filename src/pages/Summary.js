import React from "react";
import summary from "../images/summary.jpg";
import "../App.css";

export default function Summary() {
  return (
    <div className="App">
      <h1>Email Marketing</h1>
      <h2>Published Report</h2>
      <h3>Co mbined Visuals</h3>

      <img src={summary} height={900} width={1300} />
    </div>
  );
}
