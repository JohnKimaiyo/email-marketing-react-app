import React from "react";

import "../App.css";

import gender from "../images/gender.jpg";
import {NavLink} from "react-router-dom";
export default function Gender() {
  return (
    <div className="Gender">
      <h1>Count by Visuals</h1>
      <p>
        Return to <NavLink to="/">HomePage</NavLink>
      </p>
      <img src={gender} height={900} width={1300} />
    </div>
  );
}
