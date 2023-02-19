import React from "react";
import Gender from "../images/Gender.jpg";
import "./App.css";
import { NavLink } from "react-router-dom";

export default function Gender() {
  return (
    <div className="gender">
      <h1>Count by Gender Visuals</h1>
      <p>
        Go to the <NavLink to="">HomePage</NavLink>
      </p>
      <img src={Gender} height={900} width={1300} />
    </div>
  );
}
