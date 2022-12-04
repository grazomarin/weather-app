import "./index.scss";
import "./scripts/style";
import { requestData } from "./scripts/api";
import { round, timezoneToDate } from "./scripts/functions";

function getUserPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
    .then((data) => {
      const lat = data.coords.latitude;
      const lon = data.coords.longitude;
      return { lat, lon };
    })
    .catch(() => {
      return undefined;
    });
}

function processData(data) {
  const weather = data.main;
  const description = data.weather[0];
  const clouds = data.clouds.all;
  const wind = round(data.wind.speed);
  const location = data.name;
  const date = undefined;

  return {
    weather,
    description,
    clouds,
    wind,
    location,
    date,
  };
}

function displayData(processed) {
  // if farenheit.active {display farenheit}
  const { weather, description, clouds, wind, location, date } = processed;

  const tempElem = document.getElementById("temp");
  const minTempElem = document.getElementById("min");
  const maxTempElem = document.getElementById("max");
  const feels_likeElem = document.getElementById("feels_like");
  const humidityElem = document.getElementById("humidity");
  const pressureElem = document.getElementById("pressure");
  const cloudsElem = document.getElementById("clouds");
  const windElem = document.getElementById("wind");
  const locationElem = document.getElementById("location");
  const descriptionElem = document.getElementById("description");

  tempElem.textContent = round(weather.temp);
  minTempElem.textContent = round(weather.temp_min);
  maxTempElem.textContent = round(weather.temp_max);
  feels_likeElem.textContent = round(weather.feels_like);
  humidityElem.textContent = weather.humidity;
  pressureElem.textContent = weather.pressure;
  cloudsElem.textContent = clouds;
  windElem.textContent = wind;
  locationElem.textContent = location;
  descriptionElem.textContent = description.description;
}

(async () => {
  const position = await getUserPosition();
  if (position) {
    const { lat, lon } = position;
    const data = await requestData(undefined, lat, lon);
    console.log(data);
  } else {
    const data = await requestData("Moscow");
    console.log(data);
    const processed = await processData(data);
    displayData(processed);
  }
})();
