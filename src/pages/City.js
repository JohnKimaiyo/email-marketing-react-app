import React from "react";
import City from "../images/City.jpg";
import "./App.css";
import { NavLink } from "react-router-dom";
export default function City() {
  return (
    <div className="city">
      <h1>Count by City Visual</h1>
      <p>
        Go to <NavLink to="/">HomePage</NavLink>
      </p>
      <img src={City} height={900} width={1300} />
    </div>
  );
}
