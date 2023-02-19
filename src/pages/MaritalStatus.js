import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import Marital from "../images/Marital.jpg";
export default function MaritalStatus() {
  return (
    <div  classsName="maritalstatus">
      <h1>Count on Marital status</h1>
      <p>
        Fo the <NavLink to="/">Home Page</NavLink>
      </p>
      <img src={Marital} height={900} width={1300} />
    </div>
  );
}
