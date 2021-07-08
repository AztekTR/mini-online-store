import React from "react";
import "./Loader.scss";

export default function Loader() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", margin: "0.5rem" }}
    >
      <div class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
