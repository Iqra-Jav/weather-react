import React from "react";

export default function forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div className="row">
        <div className="col-2 card-body">
          <div className="forecast-temperature">2°</div>

          <br />
          <div className="weather-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <br />
          <div className="day">SUN</div>
        </div>
        <div className="col-2 card-body">
          <div className="forecast-temperature">5°</div>

          <br />
          <div className="weather-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <br />
          <div className="day">MON</div>
        </div>
        <div className="col-2 card-body">
          <div className="forecast-temperature">1°</div>

          <br />
          <div className="weather-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <br />
          <div className="day">TUE</div>
        </div>
        <div className="col-2 card-body">
          <div className="forecast-temperature">6°</div>

          <br />
          <div className="weather-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <br />
          <div className="day">WED</div>
        </div>
        <div className="col-2 card-body">
          <div className="forecast-temperature">-2°</div>

          <br />
          <div className="weather-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <br />
          <div className="day">THU</div>
        </div>
        <div className="col-2 card-body">
          <div className="forecast-temperature">4°</div>

          <br />
          <div className="weather-icon">
            <i className="fas fa-cloud"></i>
          </div>
          <br />
          <div className="day">FRI</div>
        </div>
      </div>
    </div>
  );
}
