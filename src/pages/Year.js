import React from "react";
import Year from "../images/Year.jpg";
import "./App.css";
import { NavLink } from "react-router-dom";
export default function Year() {
  return (
    <div>
      <h1>Count by Year</h1>
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
      <img src={Year} heaight={900} width={1300} />
    </div>
  );
}
