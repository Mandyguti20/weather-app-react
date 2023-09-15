import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BigIcon from "./BigIcon";
import CityData from "./CityData";
import Search from "./Search";
import Footer from "./Footer";
import WeatherDescription from "./WeatherDescription";


import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="card main-card">
          <div className="card-body">
            <Search city="branford" />
            <div className="row">
              <div className="col-4">
                <BigIcon />
              </div>
              <div className="col-4">
                <CityData
                  weekDay="Sunday"
                  weekValue="21"
                  month="May"
                  cityName="Branford, CT"
                />
              </div>
              <div className="col-4">
                <WeatherDescription value="60" wind="3" humidity="95" />
              </div>
            </div>
          </div>      
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
