import React from "react";
import State from "../images/State";
import { NavLink } from "react-router-dom";
import "./App.css";
export default function State() {
  return (
    <div>
      <h1>Count by State</h1>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
      <img src={State} height={900} width={1300} />{" "}
    </div>
  );
}
