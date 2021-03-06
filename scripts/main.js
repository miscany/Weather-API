import { WEATHER_API_KEY, kelvin } from "./variables.js";
import { weatherCall, displayWeather, displayFalse } from "./functions.js";

// Variables
const enterBtn = document.getElementById("enter"),
  inputField = document.getElementById("search-field");

// Functions

// Event Listeners

enterBtn.addEventListener("click", () => {
  weatherCall(inputField.value).then((response) => {
    if (response == false) {
      displayFalse(true);
    } else {
      displayFalse(false);
      displayWeather(response);
    }
  });
});
