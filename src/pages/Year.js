import React from "react";
import year from "../images/year.jpg";
import "../App.css";
import { NavLink } from "react-router-dom";
export default function Year() {
  return (
    <div className="App">
      <h1>Count by Year</h1>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
      <img src={year} heaight={900} width={1300} />
    </div>
  );
}
