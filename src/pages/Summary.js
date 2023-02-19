import React from "react";
import Sumary from "../images/Summary.jpg";
export default function Summary() {
  return (
    <div>
      <h1>Email Marketing</h1>
      <h2>Published Report</h2>
      <h3>Combined Visuals</h3>
      <img src={Sumary} height={900} width={1300} />
    </div>
  );
}
