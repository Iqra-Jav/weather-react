import React from "react";

export default function Search() {
  return (
    <div>
      <button class="location-button">⌖</button>
      <form id="search-form">
        <div class="row">
          <div class="col-9">
            <input
              type="text"
              class="form-control"
              placeholder="Search a city"
              autofocus="on"
              autocomplete="off"
            />
          </div>
          <div class="col-3">
            <input type="submit" value="Go" class="form-control" />
          </div>
        </div>
      </form>
    </div>
  );
}
