import "./why-styles.css";
import React, { useState } from "react";


const RevealWhy = () => {
  const [revealed, setRevealed] = useState(false);
  

  const handleToggle = () => {
    setRevealed((prev) => !prev);
  };

  return (
    <div className="reveal-y-container mx-auto my-1 pt-4">
      <button className="radius toggle-y-button " onClick={handleToggle}>
      {revealed ? "Hide" : "Why"}
      </button>
      <div className={`reveal-y-content ${revealed ? "revealed" : ""}`}>
        <h2>Why Hydroponics is Amazing</h2>
        <p>Hydroponics can save you as much as 5000$ a year</p>
        <p>Make car payments/house payments instead of buying pot</p>
        <p>Hydroponics can grow you much as you want</p>
        <p>Become your own Dispensary</p>
      </div>
      <div className={`ybackground ${revealed ? "revealed" : ""}`} />
    </div>
  );
};

export default RevealWhy;