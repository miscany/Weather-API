import { WEATHER_API_KEY, kelvin } from "./variables.js";

export function displayWeather(data) {}

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
