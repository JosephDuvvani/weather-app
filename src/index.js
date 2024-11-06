import "./style.css";
import cloudy from "./icons/cloudy.png";
import rainy from "./icons/rain.png";

async function getWeatherData(location) {
  const request = new Request(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=44U84TAKBGJZQ9BU7VJRFQADW`,
    { mode: "cors" }
  );
  try {
    const response = await fetch(request);
    if (!response.ok) throw new Error("Location Not Found!");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

function getFilteredData(data) {
  const appData = {
    address: data.resolvedAddress,
    currentConditions: {
      temp: data.currentConditions.temp,
      feelslike: data.currentConditions.feelslike,
      datetime: data.currentConditions.datetime,
    },
    days: data.days.map((day) => {
      return {
        tempmax: day.tempmax,
        tempmin: day.tempmin,
        datetime: day.datetime,
        conditions: day.conditions,
        dew: day.dew,
        humidity: day.humidity,
        windspeed: day.windspeed,
        pressure: day.pressure,
        visibility: day.visibility,
        sunrise: day.sunrise,
        sunset: day.sunset,
        hours: day.hours.map((hour) => {
          return {
            datetime: hour.datetime,
            conditions: hour.conditions,
            humidity: hour.humidity,
            windspeed: hour.windspeed,
            pressure: hour.pressure,
            visibility: hour.visibility,
            temp: hour.temp,
            feelslike: hour.feelslike,
          };
        }),
      };
    }),
  };
  console.log(appData);
}

const searchInput = document.getElementById("search_form-input");
const searchButton = document.getElementById("search_form-button");

const searchLocationWeather = () => {
  if (searchInput.value === "") return;
  const location = searchInput.value.trim();
  const weatherData = getWeatherData(location);
  weatherData.then((result) => {
    if (!result) return;
    getFilteredData(result);
  });
};

searchButton.addEventListener("click", searchLocationWeather);
document.getElementById("weather_descr_icon").src = cloudy;

const weekdayIcons = document.querySelectorAll(".weather-image-container");
weekdayIcons.forEach((day) => {
  day.querySelector(".weather-image").src = rainy;
});
//Prevent unstyled content flash

let domReady = (cb) => {
  document.readyState === "interactive" || document.readyState === "complete"
    ? cb()
    : document.addEventListener("DOMContentLoaded", cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = "visible";
});
