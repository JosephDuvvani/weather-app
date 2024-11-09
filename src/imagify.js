import clouds from "./icons/clouds.png";
import rain from "./icons/rain.png";
import snow from "./icons/snow.png";
import sun from "./icons/sun.png";
import cloudy from "./images/day/cloud.jpg";
import clear from "./images/day/clear.jpg";
import snowy from "./images/day/snow.jpg";
import rainy from "./images/day/rain.jpg";

export default function () {
  const imagify = (conditions) => {
    if (conditions.includes("Snow")) {
      return snow;
    } else if (conditions.includes("Rain")) {
      return rain;
    } else if (
      conditions.includes("cloud") ||
      conditions.includes("Overcast")
    ) {
      return clouds;
    } else {
      return sun;
    }
  };

  const imagifyBackground = (conditions) => {
    if (conditions.includes("Snow")) {
      return snowy;
    } else if (conditions.includes("Rain")) {
      return rainy;
    } else if (
      conditions.includes("cloud") ||
      conditions.includes("Overcast")
    ) {
      return cloudy;
    } else {
      return clear;
    }
  };

  return {
    imagify,
    imagifyBackground,
  };
}
