import { WEATHER_API_KEY, kelvin } from "./variables.js";

export function kelvinCelsius(degree) {
  return Math.round(degree - 273.15);
}

export async function weatherState(data) {
  const icon = data.weather[0].icon;
  return await fetch(`https://openweathermap.org/img/wn/${icon}@2x.png`)
    .then((res) => res.blob())
    .then((data) => {
      const url = URL.createObjectURL(data);
      document.getElementById("weather-icon").src = url;
    });
}
export async function displayWeather(data) {
  // Extract values from api
  const location = data.name,
    temp = kelvinCelsius(data.main.temp),
    feelsLike = kelvinCelsius(data.main.feels_like),
    high = kelvinCelsius(data.main.temp_max),
    low = kelvinCelsius(data.main.temp_min),
    humidity = data.main.humidity + "%",
    wind = data.wind.speed; //?

  // Get elements from page
  const locationElem = document.querySelector(".location"),
    tempElem = document.querySelector(".degrees h1 span"),
    feelsLikeElem = document.querySelector(".feels-like span"),
    highElem = document.querySelector(".high span"),
    lowElem = document.querySelector(".low span"),
    humidityElem = document.querySelector(".humidity span"),
    windElem = document.querySelector(".wind span"),
    weatherIcon = document.querySelector("#weather-icon");

  weatherState(data);

  // Set elements value
  locationElem.innerText = location;
  tempElem.innerText = temp;
  feelsLikeElem.innerText = feelsLike + "° C";
  highElem.innerText = high + "° C";
  lowElem.innerText = low + "° C";
  humidityElem.innerText = humidity;
  windElem.innerText = wind;
}

export function displayFalse() {}
export async function weatherCall(city) {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        return false;
      }
      return response.json();
    })
    .then((response) => {
      return response;
    });
}
