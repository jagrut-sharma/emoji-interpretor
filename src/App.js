import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [textChange, setTextChange] = useState("");

  function changeHandler(event) {
    setTextChange(event.target.value);
  }

  return (
    <div className="App">
      <h1> Emoji Interpretor </h1>
      <input
        type="text"
        style={{ width: "80%", padding: "1rem" }}
        onChange={changeHandler}
      />
      <p style={{ fontSize: "1.5rem" }}> {textChange} </p>
    </div>
  );
}
