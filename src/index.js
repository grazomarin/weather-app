import "./index.scss";
import "./scripts/style";
import { requestData, requestIcon } from "./scripts/api";
import { round, tzToDate, updateTime } from "./scripts/functions";
import { activateSearch } from "./scripts/style";

let IntID;

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
  // if farenheit.active {display farenheit}
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
  const descriptionElem = document.getElementById("description");
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
  windElem.textContent = wind;
  locationElem.textContent = location;
  descriptionElem.textContent = description.description;
  dateElem.textContent = date;

  IntID = setInterval(updateTime, 1000, dateElem, timezone);

  imgElem.src = url;
}

const searchBtn = document.querySelector(".details-head-buttons-search");
const searchCont = document.querySelector(".details-head-searchCont");
const input = document.getElementById("search");
searchBtn.addEventListener("click", async () => {
  if (searchCont.classList.contains("active")) {
    const location = input.value;
    const data = await requestData(location);
    const processed = await processData(data);
    clearInterval(IntID);
    displayData(processed);
    input.value = "";
  } else activateSearch();
});

(async () => {
  const position = await getUserPosition();
  if (position) {
    const { lat, lon } = position;
    const data = await requestData(undefined, lat, lon);
    console.log(data);
  } else {
    const data = await requestData("new york");
    console.log(data);
    const processed = await processData(data);
    displayData(processed);
  }
})();
