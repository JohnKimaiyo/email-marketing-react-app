import React from "react";

import "../App.css";

import gender from "../images/gender.jpg"


export default function Gender() {
  return (
    <div className="App">
      <h1>Count by Visuals</h1>
     
      <img src={gender} height={900} width={1300} />
    </div>
  );
}
