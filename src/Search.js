import "./Search.css";
import React, { useState } from "react";

function Search() {
  let [city, setCity] = useState("");

  function showSearchResults(event) {
    event.preventDefault();
    alert(`Searching for ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form className="search-form" onSubmit={showSearchResults}>
        <input
          onChange={updateCity}
          type="search"
          id="search-city-input"
          aria-label="city"
          placeholder="  🔍 Type city name"
        />
        <button className="submit-button" id="search-submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Search;
