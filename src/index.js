import "./index.scss";
import "./scripts/style";
import {
  requestData,
  requestIcon,
  getUserPosition,
  CoordToCity,
} from "./scripts/api";
import { round, tzToDate, updateTime } from "./scripts/functions";
import {
  activateSearch,
  showLoadingScreen,
  hideLoadingScreen,
  checkUnit,
  setClimateBackground,
  elems,
} from "./scripts/style";

let IntID;
let locationGlob;

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

async function processSearch(unit, inputVal) {
  clearInterval(IntID);
  const location = inputVal;
  showLoadingScreen();
  requestData(unit, location)
    .then((data) => {
      displayData(data);
      setClimateBackground(data.weather[0].id, data.weather[0].icon);
      IntID = updateTime(elems.date, data.timezone);
      hideLoadingScreen();
    })
    .catch((err) => {
      hideLoadingScreen();
      elems.error.style.translate = "0";
      setTimeout(() => {
        elems.error.style.translate = "120%";
      }, 3000);
    });
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
  processSearch(checkUnit(), locationGlob);
});

elems.f.addEventListener("click", () => {
  if (elems.f.classList.contains("active")) return;
  elems.f.classList.add("active");
  elems.c.classList.remove("active");
  processSearch(checkUnit(), locationGlob);
});

(() => {
  getUserPosition()
    .then((lat, lon) => {
      return CoordToCity(lat, lon);
    })
    .then((city) => {
      locationGlob = city;
      processSearch("metric", locationGlob);
    })
    .catch(() => {
      locationGlob = "Baku";
      processSearch("metric", "Baku");
    });
})();
