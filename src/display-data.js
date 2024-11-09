export default function () {
  const app = document.getElementById("weather-app");
  const setBackground = (imagePath) => {
    app.style.backgroundImage = `linear-gradient(
        rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imagePath})`;
  };
  //Weather Card
  const address = document.getElementById("address");
  const datetime = document.getElementById("datetime");
  const tempCelsius = document.getElementById("temp-celsius");
  const tempFahrenheit = document.getElementById("temp-fahrenheit");
  const descriptionImage = document.getElementById("weather_descr_icon");
  const descriptionText = document.getElementById("weather_descr_text");
  const dataTableTitle = document.getElementById("table_title");
  const feelslikeCelsius = document.getElementById("feelslike-celsius");
  const feelslikeFahrenheit = document.getElementById("feelslike-fahrenheit");
  const tempHighLow = document.getElementById("high-low");
  const wind = document.getElementById("wind");
  const pressure = document.getElementById("pressure");
  const visibility = document.getElementById("visibility");
  const humidity = document.getElementById("humidity");
  const dewPoint = document.getElementById("dew_point");
  const uvIndex = document.getElementById("uv_index");
  const moonPhase = document.getElementById("moon_phase");

  function display(ref, value) {
    ref.textContent = "";
    ref.textContent = value;
  }

  const showAddress = (input) => {
    display(address, input);
  };

  const showDatetime = (input) => {
    display(datetime, input);
  };

  const showTempCelsius = (input) => {
    display(tempCelsius, input);
  };

  const showTempFahrenheit = (input) => {
    display(tempFahrenheit, input);
  };

  const showDescriptionImage = (input) => {
    descriptionImage.src = input;
  };

  const showDescriptionText = (input) => {
    display(descriptionText, input);
  };

  const showDataTableTitle = (input) => {
    display(dataTableTitle, input);
  };

  const showFeelslikeCelsius = (input) => {
    display(feelslikeCelsius, input);
  };

  const showFeelslikeFahrenheit = (input) => {
    display(feelslikeFahrenheit, input);
  };

  const showMaxMinTemp = (input) => {
    display(tempHighLow, input);
  };

  const showWind = (input) => {
    display(wind, input);
  };

  const showPressure = (input) => {
    display(pressure, input);
  };

  const showVisibility = (input) => {
    display(visibility, input);
  };

  const showHumidity = (input) => {
    display(humidity, input);
  };

  const showDew = (input) => {
    display(dewPoint, input);
  };

  const showUVIndex = (input) => {
    display(uvIndex, input);
  };

  const showMoonPhase = (input) => {
    display(moonPhase, input);
  };

  //Week
  const day = document.querySelectorAll(".day");
  const date = document.querySelectorAll(".date");
  const weatherImage = document.querySelectorAll(".weather-image");
  const tempWeekday = document.querySelectorAll(".daytemp");
  const inactiveUnitSystem = document.getElementById("inactive-units");

  const showWeekday = (dayNum, newDay, newDate, newImage, dayTemp) => {
    day[dayNum].textContent = "";
    date[dayNum].textContent = "";
    weatherImage[dayNum].src = "#";
    tempWeekday[dayNum].textContent = "";

    day[dayNum].textContent = newDay;
    date[dayNum].textContent = newDate;
    weatherImage[dayNum].src = newImage;
    tempWeekday[dayNum].textContent = dayTemp;
  };

  //Units
  const daytemp = document.querySelectorAll(".temp-track");
  let unitSystem = "C/kph";

  const getUnitSystem = () => unitSystem;
  const setUnitSystem = (units) => (unitSystem = units);
  const showUnitSystem = () => {
    if (!(unitSystem === "C/kph")) {
      inactiveUnitSystem.textContent = "";
      inactiveUnitSystem.textContent = "Celsius";
      daytemp.forEach((temp) => {
        temp.style.bottom = "-0.1em";
      });
    } else {
      inactiveUnitSystem.textContent = "";
      inactiveUnitSystem.textContent = "Fahrenheit";
      daytemp.forEach((temp) => {
        temp.style.bottom = "initial";
      });
    }
  };

  const changeDaytemp = (dayNum, temp) => {
    tempWeekday[dayNum].textContent = "";
    tempWeekday[dayNum].textContent = temp;
  };

  return {
    setBackground,
    showAddress,
    showDatetime,
    showTempCelsius,
    showTempFahrenheit,
    showDescriptionImage,
    showDescriptionText,
    showDataTableTitle,
    showFeelslikeCelsius,
    showFeelslikeFahrenheit,
    showMaxMinTemp,
    showWind,
    showPressure,
    showVisibility,
    showHumidity,
    showDew,
    showUVIndex,
    showMoonPhase,
    showWeekday,
    getUnitSystem,
    setUnitSystem,
    showUnitSystem,
    changeDaytemp,
  };
}
