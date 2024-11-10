import "./style.css";
import DisplayData from "./display-data";
import imagify from "./imagify";
import cloudy from "./icons/clouds.png";
import rainy from "./icons/rain.png";
import { format, compareAsc } from "date-fns";
import { da, ta } from "date-fns/locale";

const weatherApp = DisplayData();
const weatherImages = imagify();
let currentWeatherData;

//Fetch Data

async function getWeatherData(location) {
  const request = new Request(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=44U84TAKBGJZQ9BU7VJRFQADW`,
    { mode: "cors" }
  );
  try {
    weatherApp.loading();
    const response = await fetch(request);
    if (!response.ok) throw new Error("Location Not Found!");
    const data = await response.json();
    weatherApp.stopLoading();
    weatherApp.noError();

    return data;
  } catch (error) {
    weatherApp.stopLoading();
    weatherApp.showError(error);
  }
}

//Filter Data

function getFilteredData(data) {
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
        feelslike: day.feelslike,
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

const fahrenheitToCelsius = (fahren) => {
  return Math.trunc(((+fahren - 32) * 5) / 9);
};

const milesToKilometers = (miles) => {
  return (+miles / 0.6214).toFixed(1);
};

const nameMoonPhase = (value) => {
  if (value === 0) {
    return "New Moon";
  } else if (value > 0 && value < 0.25) {
    return "Waxing Crescent";
  } else if (value === 0.25) {
    return "First Quarter";
  } else if (value > 0.25 && value < 0.5) {
    return "Waxing Gibbous";
  } else if (value === 0.5) {
    return "Full Moon";
  } else if (value > 0.5 && value < 0.75) {
    return "Waning Gibbous";
  } else if (value < 0.75) {
    return "Last Quarter";
  } else if (value > 0.75 && value <= 1) {
    return "Waning Crescent";
  }
};

//Display Data

let dayNum = 0;

const displayCardData = (data) => {
  let location = data.address;
  if (location.includes(",")) {
    location = data.address.split(",");
    location.pop();
  }
  const current = data.currentConditions;
  const today = data.days[dayNum];
  const currentTime = current.datetime.split(":");
  currentTime.pop();
  const formattedDateTime = `${currentTime.join(":")} ${format(
    new Date(`${today.datetime}`),
    "EEEE, dd MMM yyyy"
  )}`;

  weatherApp.showAddress(data.address);
  if (dayNum == 0) {
    weatherApp.showDatetime(formattedDateTime);
    weatherApp.showTempCelsius(fahrenheitToCelsius(current.temp));
    weatherApp.showTempFahrenheit(Math.trunc(current.temp));
    weatherApp.showFeelslikeFahrenheit(Math.trunc(current.feelslike));
    weatherApp.showFeelslikeCelsius(fahrenheitToCelsius(current.feelslike));
  } else {
    weatherApp.showDatetime(
      format(new Date(`${today.datetime}`), "EEEE, dd MMM yyyy")
    );
    weatherApp.showTempCelsius(fahrenheitToCelsius(today.temp));
    weatherApp.showTempFahrenheit(Math.trunc(today.temp));
    weatherApp.showFeelslikeFahrenheit(Math.trunc(today.feelslike));
    weatherApp.showFeelslikeCelsius(fahrenheitToCelsius(today.feelslike));
  }

  weatherApp.showDescriptionImage(weatherImages.imagify(today.conditions));
  weatherApp.showDescriptionText(today.conditions);
  weatherApp.showDataTableTitle(`Weather today in ${location}`);
  weatherApp.showMaxMinTemp(
    `${fahrenheitToCelsius(today.tempmax)}° / ${fahrenheitToCelsius(
      today.tempmin
    )}°`
  );
  weatherApp.showWind(`${milesToKilometers(today.windspeed)} km/h`);
  weatherApp.showPressure(`${Math.trunc(today.pressure)} hpa`);
  weatherApp.showVisibility(`${milesToKilometers(today.visibility)} km`);
  weatherApp.showHumidity(`${today.humidity}%`);
  weatherApp.showDew(`${fahrenheitToCelsius(today.dew)}°`);
  weatherApp.showUVIndex(`${today.uvindex} of 10`);
  weatherApp.showMoonPhase(nameMoonPhase(today.moonphase));
};

//Search by Location

const searchInput = document.getElementById("search_form-input");
const searchButton = document.getElementById("search_form-button");
const searchClearButton = document.getElementById("search_form-clear");

const searchLocationWeather = () => {
  if (searchInput.value === "") return;
  weatherApp.noError();
  const location = searchInput.value.trim();
  weatherApp.hideDataField();
  const weatherData = getWeatherData(location);
  weatherData.then((result) => {
    if (!result) return;
    const data = getFilteredData(result);
    currentWeatherData = data;

    weatherApp.setBackground(
      weatherImages.imagifyBackground(data.days[dayNum].conditions)
    );

    //Weather Card
    displayCardData(data);
    weatherApp.showDataField();
    weatherApp.showUnitSystem();
    //Week
    for (let i = 0; i < 7; i++) {
      let day = format(new Date(data.days[i].datetime), "EEEE");
      let date = format(new Date(data.days[i].datetime), "dd/MM");
      let image = weatherImages.imagify(data.days[i].conditions);
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

searchButton.addEventListener("click", () => {
  weatherApp.setUnitSystem("C/kph");
  dayNum = 0;
  searchLocationWeather();
});

searchClearButton.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput.value = "";
  searchClearButton.style.visibility = "hidden";
  searchInput.focus();
});

searchInput.addEventListener("input", () => {
  if (searchInput.value.length > 0) {
    searchClearButton.style.visibility = "visible";
  } else {
    searchClearButton.style.visibility = "hidden";
  }
});

//Change Unit System

const changeUnitsButton = document.getElementById("switch-units");

const changeCardUnits = () => {
  if (!currentWeatherData) return;

  const currentUnits = weatherApp.getUnitSystem();

  weatherApp.showUnitSystem();

  const today = currentWeatherData.days[dayNum];

  if (!(currentUnits === "C/kph")) {
    weatherApp.showMaxMinTemp(
      `${Math.trunc(+today.tempmax)}° / ${Math.trunc(+today.tempmin)}°`
    );
    weatherApp.showWind(`${(+today.windspeed).toFixed(1)} mi/h`);
    weatherApp.showVisibility(`${(+today.visibility).toFixed(1)} mi`);
    weatherApp.showDew(`${Math.trunc(today.dew)}°`);
  } else {
    weatherApp.showMaxMinTemp(
      `${fahrenheitToCelsius(today.tempmax)}° / ${fahrenheitToCelsius(
        today.tempmin
      )}°`
    );
    weatherApp.showWind(`${milesToKilometers(today.windspeed)} km/h`);
    weatherApp.showVisibility(`${milesToKilometers(today.visibility)} km`);
    weatherApp.showDew(`${fahrenheitToCelsius(today.dew)}°`);
  }
};

const changeWeekdayUnits = () => {
  const currentUnits = weatherApp.getUnitSystem();
  if (!(currentUnits === "C/kph")) {
    for (let i = 0; i < 7; i++) {
      let temp = `${Math.trunc(+currentWeatherData.days[i].temp)}°`;
      weatherApp.changeDaytemp(i, temp);
    }
  } else {
    for (let i = 0; i < 7; i++) {
      let temp = `${fahrenheitToCelsius(+currentWeatherData.days[i].temp)}°`;
      weatherApp.changeDaytemp(i, temp);
    }
  }
};

changeUnitsButton.addEventListener("click", () => {
  const currentUnits = weatherApp.getUnitSystem();
  currentUnits === "C/kph"
    ? weatherApp.setUnitSystem("F/mph")
    : weatherApp.setUnitSystem("C/kph");
  changeCardUnits(dayNum);
  changeWeekdayUnits();
});

//Weekday onClick

const weekdays = document.querySelectorAll(".weekday");

weekdays.forEach((day) => {
  day.addEventListener("click", () => {
    if (!currentWeatherData) return;
    dayNum = Array.from(weekdays).indexOf(day);
    weatherApp.setBackground(
      weatherImages.imagifyBackground(
        currentWeatherData.days[dayNum].conditions
      )
    );
    displayCardData(currentWeatherData, dayNum);
    if (!(weatherApp.getUnitSystem() === "C/kph")) changeCardUnits(dayNum);
  });
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
