import React from "react";
import Sumary from "../images/Summary.jpg";
import "./App.css";
import { NavLink } from "react-router-dom";
export default function Summary() {
  return (
    <div>
      <h1>Email Marketing</h1>
      <h2>Published Report</h2>
      <h3>
        Co
        <p>
          Go to the <NavLink to="/">Homepage</NavLink>.
        </p>
        mbined Visuals
      </h3>

      <img src={Sumary} height={900} width={1300} />
    </div>
  );
}
