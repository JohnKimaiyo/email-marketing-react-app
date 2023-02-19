import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import marital from "../images/marital.jpg";
export default function MaritalStatus() {
  return (
    <div  classsName="App.css">
      <h1>Count on Marital status</h1>
      <p>
        Fo the <NavLink to="/">Home Page</NavLink>
      </p>
      <img src={marital} height={900} width={1300} />
    </div>
  );
}
