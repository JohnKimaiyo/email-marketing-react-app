import React from "react";
import time from "../images/time.jpg";
import "../App.css"
import { NavLink } from "react-router-dom";
export default function Time() {
  return (
    <div className="App">
      <h1>Count b Time visual</h1>
      <img src={time} height={900} width={1300} />
      <p>
        Return to <NavLink to="/">Homepage</NavLink>.
      </p>
    </div>
  );
}
