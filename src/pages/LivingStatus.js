import React from "react";
import Status from "../images/Status.jpg";
import "./App.css";
import { NavLink } from "react-router-dom";
export default function LivingStatus() {
  return (
    <div>
      <h1>Count on Living Status</h1>
      <p>
        Go to the <NavLink to="/">HomePage</NavLink>
      </p>
      <img src={Status} height={900} width={1300} />
    </div>
  );
}
