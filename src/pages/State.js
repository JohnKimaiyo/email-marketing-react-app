import React from "react";
import state from "../images/state.jpg";
import { NavLink } from "react-router-dom";
import "../App.css";
export default function State() {
  return (
    <div className="App">
      <h1>Count by state</h1>
      <p>
        Return ro <NavLink to="/">HomePage</NavLink>
      </p>
      <img src={state} height={900} width={1300} />
    </div>
  );
}
