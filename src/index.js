import "./index.scss";
import "./scripts/style";
import { requestData, requestIcon } from "./scripts/api";
import {
  round,
  celciusToFarenheit,
  farenheitToCelcius,
  tzToDate,
  updateTime,
} from "./scripts/functions";
import { activateSearch } from "./scripts/style";

let IntID;
let locationGlob;
const searchBtn = document.querySelector(".details-head-buttons-search");
const searchCont = document.querySelector(".details-head-searchCont");
const input = document.getElementById("search");
const cBtn = document.querySelector(".C");
const fBtn = document.querySelector(".F");

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
  const timezone = data.timezone;
  const date = tzToDate(timezone);

  return {
    weather,
    description,
    clouds,
    wind,
    location,
    timezone,
    date,
  };
}

async function displayData(processed) {
  const { weather, description, clouds, wind, location, timezone, date } =
    processed;

  const tempElem = document.getElementById("temp");
  const minTempElem = document.getElementById("min");
  const maxTempElem = document.getElementById("max");
  const feels_likeElem = document.getElementById("feels_like");
  const humidityElem = document.getElementById("humidity");
  const pressureElem = document.getElementById("pressure");
  const cloudsElem = document.getElementById("clouds");
  const windElem = document.getElementById("wind");
  const locationElem = document.getElementById("location");
  const imgElem = document.getElementById("image");
  const dateElem = document.getElementById("date");
  const url = await requestIcon(description.icon);

  tempElem.textContent = round(weather.temp);
  minTempElem.textContent = round(weather.temp_min);
  maxTempElem.textContent = round(weather.temp_max);
  feels_likeElem.textContent = round(weather.feels_like);
  humidityElem.textContent = weather.humidity;
  pressureElem.textContent = weather.pressure;
  cloudsElem.textContent = clouds;
  windElem.textContent = `${wind}${
    fBtn.classList.contains("active") ? "mp/h" : "m/s"
  }`;
  locationElem.textContent = location;
  dateElem.textContent = date;

  IntID = updateTime(dateElem, timezone);

  imgElem.src = url;
}

async function processSearch(unit, inputVal, lat, lon) {
  clearInterval(IntID);
  const location = inputVal;
  const data = await requestData(unit, location, lat, lon);
  const processed = await processData(data);
  displayData(processed);
}

function checkUnit() {
  return cBtn.classList.contains("active") ? "metric" : "imperial";
}

searchBtn.addEventListener("click", () => {
  if (searchCont.classList.contains("active")) {
    processSearch(checkUnit(), input.value);
    locationGlob = input.value;
    input.value = "";
  } else activateSearch();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processSearch(checkUnit(), input.value);
    locationGlob = input.value;
    input.value = "";
  }
});

cBtn.addEventListener("click", () => {
  if (cBtn.classList.contains("active")) return;
  cBtn.classList.add("active");
  fBtn.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch(checkUnit(), undefined, locationGlob[0], locationGlob[1])
    : processSearch(checkUnit(), locationGlob);
});

fBtn.addEventListener("click", () => {
  if (fBtn.classList.contains("active")) return;
  fBtn.classList.add("active");
  cBtn.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch(checkUnit(), undefined, locationGlob[0], locationGlob[1])
    : processSearch(checkUnit(), locationGlob);
});

(async () => {
  const position = await getUserPosition();
  if (position) {
    const { lat, lon } = position;
    locationGlob = [lat, lon];
    processSearch("metric", undefined, lat, lon);
  } else {
    processSearch("metric", "moscow");
    locationGlob = "moscow";
  }
})();
