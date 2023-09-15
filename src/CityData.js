import "./CityData.css";

export default function CityData(props) {
  return (
    <div className="CityData">
      <div className="row">
        <ul>
          <li>
            <h1 className="city-name">{props.cityName}</h1>
          </li>
          <li>
            <h2 className="current-date" id="dateTime">
              {props.weekDay}, {props.month} {props.weekValue}
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
}
