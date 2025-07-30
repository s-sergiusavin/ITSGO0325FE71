import React, { useState, useEffect } from "react";
import "./WeatherInfo.scss";

const Weather = () => {
  const [cityInput, setCityInput] = useState(""); 
  const [weather, setWeather] = useState(null);   
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = "b075248b7d6a7dc48599cdcc232780e3";

  // Function to fetch weather when form is submitted
  const handleSearch = async (e) => {
    e.preventDefault(); // prevent form page reload
    if (!cityInput.trim()) return; // don't search empty

    setLoading(true);
    setError(null);
    setWeather(null); // clear old data until new fetch completes

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.trim()}&appid=${apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-container">
      <h2 className="weather-title">Check the Weather</h2>

      <form onSubmit={handleSearch}>
        <input
          className="weather-input"
          type="text"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          placeholder="Enter city name"
        />
        <button type="submit" className="weatherBtn">
          Search
        </button>
      </form>

      {loading && <p className="weather-loading">Loading weather...</p>}
      {error && <p className="weather-error">Error: {error}</p>}

      {/* Render weather info only if data exists */}
      {weather && (
        <div className="weather-info">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Conditions: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
