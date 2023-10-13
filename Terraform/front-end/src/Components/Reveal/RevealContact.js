import React, { useState } from "react";
import Email from '../../pictures/share-email.png'
import Phone from '../../pictures/white-mobile.png'
import "./styles.css";

const ContentReveal = () => {
  const [revealed, setRevealed] = useState(false);

  const handleToggle = () => {
    setRevealed((prev) => !prev);
  };

  return (
    <div className="content-reveal-container mx-auto my-0 mt-1">
      <div className={`content ${revealed ? "revealed" : ""}`}>
        <h2>Contact Us</h2>
        <p><img src={Phone} atl="contact" height="60px" className="pr-2" />text/call 602-758-7832</p>
        <p className="d-inline-flex">
          <img src={Email} alt="email"/>{" "}
          <a className="fs-6" href="mailto:grow.hydros@gmail.com"> grow.hydros@gmail.com
          </a>
        </p>
      </div>
      <div className={`background ${revealed ? "revealed" : ""}`} />
      <button className="toggle-button" onClick={handleToggle}>
        {revealed ? "Hide" : "Contact"}
      </button>
    </div>
  );
};

export default ContentReveal;
