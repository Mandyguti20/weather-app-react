import './App.css';
import BigIcon from "./BigIcon";
import CityData from "./CityData";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World!
        </p>
        <BigIcon />
        <CityData
          weekDay="Sunday"
          weekValue="21"
          month="May"
          cityName="Branford, CT"
        />
      </header>
    </div>
  );
}

export default App;
