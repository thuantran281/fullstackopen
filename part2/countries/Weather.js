import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capitalCity }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = "adb340260e6a7d7e5d58d8415e4782ca";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalCity}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [capitalCity]);

  return (
    <>
      <h3>Weather in {capitalCity}</h3>
      {weather ? (
        <>
          <p>temperature: {weather.main.temp}°C</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
            alt="weather icon"
          />
          <p>wind: {weather.wind.speed} m/s</p>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Weather;
