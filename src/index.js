import "./style.css";
import DisplayData from "./display-data";
import cloudy from "./icons/cloudy.png";
import rainy from "./icons/rain.png";
import { format, compareAsc } from "date-fns";
import { ta } from "date-fns/locale";

const weatherApp = DisplayData();

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
  console.log(data);
  return {
    address: data.resolvedAddress,
    currentConditions: {
      temp: data.currentConditions.temp,
      feelslike: data.currentConditions.feelslike,
      datetime: data.currentConditions.datetime,
    },
    days: data.days.map((day) => {
      return {
        temp: day.temp,
        tempmax: day.tempmax,
        tempmin: day.tempmin,
        datetime: day.datetime,
        conditions: day.conditions,
        dew: day.dew,
        humidity: day.humidity,
        windspeed: day.windspeed,
        pressure: day.pressure,
        visibility: day.visibility,
        uvindex: day.uvindex,
        moonphase: day.moonphase,
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
}

const searchInput = document.getElementById("search_form-input");
const searchButton = document.getElementById("search_form-button");
const searchClearButton = document.getElementById("search_form-clear");

searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    searchClearButton.style.visibility = "visible";
  } else {
    searchClearButton.style.visibility = "hidden";
  }
});

const fahrenheitToCelsius = (fahren) => {
  return Math.trunc(((+fahren - 32) * 5) / 9);
};

const milesToKilometers = (miles) => {
  return (+miles / 0.6214).toFixed(1);
};

const displayLocationWeather = () => {
  if (searchInput.value === "") return;
  const location = searchInput.value.trim();
  const weatherData = getWeatherData(location);
  weatherData.then((result) => {
    if (!result) return;
    const data = getFilteredData(result);

    //Weather Card
    let location = data.address;
    if (location.includes(",")) {
      location = data.address.split(",");
      location.pop();
    }
    const current = data.currentConditions;
    const today = data.days[0];
    const currentTime = current.datetime.split(":");
    currentTime.pop();
    const formattedDateTime = `${currentTime.join(":")} ${format(
      new Date(`${today.datetime}`),
      "EEEE, dd MMM yyyy"
    )}`;

    weatherApp.showAddress(data.address);
    weatherApp.showDatetime(formattedDateTime);
    weatherApp.showTempCelsius(fahrenheitToCelsius(current.temp));
    weatherApp.showTempFahrenheit(Math.trunc(current.temp));
    weatherApp.showDescriptionText(today.conditions);
    weatherApp.showDataTableTitle(`Weather today in ${location}`);
    weatherApp.showFeelslikeCelsius(fahrenheitToCelsius(current.feelslike));
    weatherApp.showFeelslikeFahrenheit(Math.trunc(current.feelslike));
    weatherApp.showMaxMinTemp(
      `${fahrenheitToCelsius(today.tempmax)}° / ${fahrenheitToCelsius(
        today.tempmin
      )}°`
    );
    weatherApp.showWind(`${milesToKilometers(today.windspeed)} km/h`);
    weatherApp.showPressure(`${Math.trunc(today.pressure)}%`);
    weatherApp.showVisibility(`${milesToKilometers(today.visibility)} km`);
    weatherApp.showHumidity(`${today.humidity}%`);
    weatherApp.showDew(`${fahrenheitToCelsius(today.dew)}°`);
    weatherApp.showUVIndex(`${today.uvindex} of 10`);
    weatherApp.showMoonPhase("Full Moon");

    //Week
    for (let i = 0; i < 7; i++) {
      let day = format(new Date(data.days[i].datetime), "EEEE");
      let date = format(new Date(data.days[i].datetime), "dd/MM");
      let image = rainy;
      let tempC = `${fahrenheitToCelsius(data.days[i].temp)}°`;
      let tempF = `${Math.trunc(+data.days[i].temp)}°`;

      if (i === 0) {
        weatherApp.showWeekday(i, "Today", date, image, tempC, tempF);
      } else if (i === 1) {
        weatherApp.showWeekday(i, "Tomorrow", date, image, tempC, tempF);
      } else {
        weatherApp.showWeekday(i, day, date, image, tempC, tempF);
      }
    }
  });
};

searchButton.addEventListener("click", displayLocationWeather);

searchClearButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  searchClearButton.style.visibility = "hidden";
});

//Dumby DOM content
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
