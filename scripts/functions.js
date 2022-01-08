import { WEATHER_API_KEY, kelvin } from "./variables.js";

export function kelvinCelsius(degree) {
  return Math.round(degree - 273.15);
}
export function displayWeather(data) {
  // Extract values from api
  const temp = kelvinCelsius(data.main.temp),
    feelsLike = kelvinCelsius(data.main.feels_like),
    high = kelvinCelsius(data.main.temp_max),
    low = kelvinCelsius(data.main.temp_min),
    humidity = data.main.humidity + "%",
    wind = data.wind.speed; //?

  // Get elements from page
  const tempElem = document.querySelector(".degrees h1 span"),
    feelsLikeElem = document.querySelector(".feels-like span"),
    highElem = document.querySelector(".high span"),
    lowElem = document.querySelector(".low span"),
    humidityElem = document.querySelector(".humidity span"),
    windElem = document.querySelector(".wind span");

  // Set elements value
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
