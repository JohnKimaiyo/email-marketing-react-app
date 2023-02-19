import React from "react";
import state from "../images/state";
import { NavLink } from "react-router-dom";
import "./App.css";
export default function State() {
  return (
    <div className="State">
      <h1>Count by State</h1>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
      <img src={state} height={900} width={1300} />{" "}
    </div>
  );
}
