import "./UnitConverter.css";
import React, { useState } from "react";

export default function UnitConverter(props) {
  let [temperture, setTemperature] = useState(props.value);

  function showFarenheitUnit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.value * 9) / 5 + 32));
  }

  function showCelsius(event) {
    event.preventDefault();
    setTemperature(props.value);
  }

  return (
    <div className="UnitConverter">
      <span className="current-temp">{temperture}</span>
      <span className="units">
        <a href="/" className="imperial-unit" onClick={showFarenheitUnit}>
          °F
        </a>{" "}
        |{" "}
        <a href="/" className="metric-unit" onClick={showCelsius}>
          °C
        </a>
      </span>
    </div>
  );
}
