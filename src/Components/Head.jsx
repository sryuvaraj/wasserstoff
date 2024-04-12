import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import EventAndCollection from "./EventAndCollection";

const Head = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="app">
      <div className={`component ${isVisible ? "visible" : "hidden"}`}>
        <div onClick={toggleVisibility}>
          <Home />
        </div>
      </div>

      <div className={`component ${isVisible ? "hidden" : "visible"}`}>
        {/* Component 2 */}
        <EventAndCollection />
      </div>
    </div>
  );
};

export default Head;
