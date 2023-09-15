import "./BigIcon.css";
import "./styles.css";

export default function BigIcon() {
  return (
    <div className="BigIcon">
      <div className="container">
        <div className="row weather-display-row">
          <div className="col-4 big-icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt=""
              id="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
