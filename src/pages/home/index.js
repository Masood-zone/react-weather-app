import React, { useState } from "react";
import getCityWeather from "../../root/getCityDetails";

function Home() {
  const [country, setCountry] = useState("");
  const [countryWeather, setCountryWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [icon, setIcon] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Country name:" + country);
    await getCityWeather(country);
  };
  return (
    <div className="">
      <h1>Weather Forecast</h1>
      {/* Get weather */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>
      {/* Display weather */}
      {Object.keys(countryWeather).length > 0 ? (
        <div>
          <h1>Country Name: {countryWeather.name}</h1>
          <p>Timezone: {countryWeather.timezone}</p>
          <p>Weather status: {countryWeather.weather[0].main}</p>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="Weather Icon"
          />
          <p>Description: {countryWeather.weather[0].description}</p>
          <p>Cloudiness: {countryWeather.clouds.all}%</p>
          <p>Visibilty: {countryWeather.visibility}Km</p>
          <p>Temperature: {countryWeather.main.temp}°C</p>
          <p>Feels like: {countryWeather.main.feels_like}°C</p>
          <p>Humidity: {countryWeather.main.humidity}%</p>
          <p>Wind speed: {countryWeather.wind.speed}m/h</p>
        </div>
      ) : (
        <div>Nothing to show here</div>
      )}
    </div>
  );
}

export default Home;
