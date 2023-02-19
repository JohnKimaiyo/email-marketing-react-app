import React from "react";
import summary from "../images/summary.jpg";
import "../App.css";
import { NavLink } from "react-router-dom";
export default function Summary() {
  return (
    <div className="App">
      <h1>Email Marketing</h1>
      <h2>Published Report</h2>
      <h3>Combined Visuals</h3>
      <p>
        Return to <NavLink to="/">HomePage</NavLink>
      </p>
      <img src={summary} height={900} width={1300} />
    </div>
  );
}
