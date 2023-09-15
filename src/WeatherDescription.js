import "./WeatherDescription.css";
import UnitConverter from "./UnitConverter";

export default function WeatherDescription(props) {
  return (
    <div className="WeatherDescription">
      <div className="container">
        <div className="row">
          <ul>
            <li>
              <span className="weather-temp">
                <UnitConverter value="2" />
              </span>
            </li>
            <li>
              <p className="wind">
                Wind: <span className="wind">{props.wind} </span>mph
              </p>
            </li>
            <li>
              <p className="humidity">
                Humidity: <span className="humidity">{props.humidity}</span>%
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
