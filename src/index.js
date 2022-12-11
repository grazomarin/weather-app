import "./index.scss";
import "./scripts/style";
import { requestData, requestIcon } from "./scripts/api";
import { round, tzToDate, updateTime } from "./scripts/functions";
import { activateSearch, setClimateBackground, elems } from "./scripts/style";

let IntID;
let locationGlob;

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

async function displayData(data) {
  const url = await requestIcon(data.weather[0].icon);
  elems.temp.textContent = round(data.main.temp);
  elems.minTemp.textContent = round(data.main.temp_min);
  elems.maxTemp.textContent = round(data.main.temp_max);
  elems.feels_like.textContent = round(data.main.feels_like);
  elems.humidity.textContent = data.main.humidity;
  elems.pressure.textContent = data.main.pressure;
  elems.clouds.textContent = data.clouds.all;
  elems.wind.textContent = `${round(data.wind.speed)}${
    elems.f.classList.contains("active") ? "mp/h" : "m/s"
  }`;
  elems.location.textContent = data.name;
  elems.date.textContent = tzToDate(data.timezone);
  elems.img.src = url;
}

async function processSearch(unit, inputVal, lat, lon) {
  clearInterval(IntID);
  const location = inputVal;
  requestData(unit, location, lat, lon)
    .then((data) => {
      displayData(data);
      setClimateBackground(data.weather[0].id);
      IntID = updateTime(elems.date, data.timezone);
    })
    .catch((err) => {
      elems.error.style.translate = "0";
      setTimeout(() => {
        elems.error.style.translate = "120%";
      }, 3000);
    });
}

function checkUnit() {
  return elems.c.classList.contains("active") ? "metric" : "imperial";
}

elems.searchBtn.addEventListener("click", () => {
  if (elems.searchCont.classList.contains("active")) {
    processSearch(checkUnit(), elems.input.value);
    locationGlob = elems.input.value;
    elems.input.value = "";
  } else activateSearch();
});

elems.input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    processSearch(checkUnit(), elems.input.value);
    locationGlob = elems.input.value;
    elems.input.value = "";
  }
});

elems.c.addEventListener("click", () => {
  if (elems.c.classList.contains("active")) return;
  elems.c.classList.add("active");
  elems.f.classList.remove("active");
  Array.isArray(locationGlob)
    ? processSearch(checkUnit(), undefined, locationGlob[0], locationGlob[1])
    : processSearch(checkUnit(), locationGlob);
});

elems.f.addEventListener("click", () => {
  if (elems.f.classList.contains("active")) return;
  elems.f.classList.add("active");
  elems.c.classList.remove("active");
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
