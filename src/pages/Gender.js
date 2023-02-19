import React from "react";
import Gender from "../images/Gender.jpg";
import "../App.css";
import { NavLink } from "react-router-dom";
import gender from "../images/gender.jpg"
export default function Gender() {
  return (
    <div className="App">
      <h1>Count by Gender Visuals</h1>
      <p>
        Go to the <NavLink to="">HomePage</NavLink>
      </p>
      <img src={gender} height={900} width={1300} />
    </div>
  );
}
