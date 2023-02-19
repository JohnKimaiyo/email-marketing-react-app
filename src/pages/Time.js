import React from "react";
import Time from "../images/Image.jpg";
import "./App.css"
import { NavLink } from "react-router-dom";
export default function Time() {
  return (
    <div>
      <h1>Count b Time visual</h1>
      <img src={Time} height={900} width={1300} />
      <p>
        Go to the <NavLink to="/">Homepage</NavLink>.
      </p>
    </div>
  );
}
