import React from "react";
import status from "../images/status.jpg";
import "../App.css";
import { NavLink } from "react-router-dom";
export default function LivingStatus() {
  return (
    <div className="App.css">
      <h1>Count on Living Status</h1>
      <p>
        Go to the <NavLink to="/">HomePage</NavLink>
      </p>
      <img src={status} height={900} width={1800} />
    </div>
  );
}
