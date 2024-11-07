export default function () {
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

  //Week
  const day = document.querySelectorAll(".day");
  const date = document.querySelectorAll(".date");
  const weatherImage = document.querySelectorAll(".weather-image");
  const daytempCelsius = document.querySelectorAll(".daytemp-celsius");
  const daytempFahrenheit = document.querySelectorAll(".daytemp-fahrenheit");

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

  const showWeekday = (
    dayNum,
    newDay,
    newDate,
    newImage,
    dayTempC,
    dayTempF
  ) => {
    day[dayNum].textContent = "";
    date[dayNum].textContent = "";
    weatherImage[dayNum].src = "#";
    daytempCelsius[dayNum].textContent = "";
    daytempFahrenheit[dayNum].textContent = "";

    day[dayNum].textContent = newDay;
    date[dayNum].textContent = newDate;
    weatherImage[dayNum].src = newImage;
    daytempCelsius[dayNum].textContent = dayTempC;
    daytempFahrenheit[dayNum].textContent = dayTempF;
  };

  return {
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
  };
}
