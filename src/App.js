import "./App.css";
import Search from "./Search";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Forecast from "./Forecast";

function App() {
  let city = "New York";
  let currentDay = "Saturday";
  let dayForcast = "Clouds";

  return (
    <div className="App">
      <Search />
      <br />
      <h1>
        16 <span className="unit">C</span>
      </h1>
      <h2>{city}</h2>
      <div className="row">
        <div className="col-6">
          <div className="currentDay">{currentDay}</div>
          <div className="dayForcast">{dayForcast}</div>
        </div>
        <div class="col-6">
          <ul class="extra">
            <li>
              <Humidity value="38" />
            </li>
            <li>
              <Wind value="5 " />
            </li>
          </ul>
        </div>
      </div>

      <br />
      <Forecast />
    </div>
  );
}

export default App;
