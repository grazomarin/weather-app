import night800 from "../images/clearNight.jpg";
import day800 from "../images/clearDay.jpg";
import day700 from "../images/mist.jpg";
import day600 from "../images/snowDay.jpg";
import day500 from "../images/rain.jpg";
import day300 from "../images/rain.jpg";
import day200 from "../images/thunderstorm.jpg";
import { FastAverageColor } from "fast-average-color";
import loadSrc from "../images/loading.svg";

const elems = {
  body: document.querySelector("body"),
  html: document.querySelector("html"),
  temp: document.getElementById("temp"),
  minTemp: document.getElementById("min"),
  maxTemp: document.getElementById("max"),
  feels_like: document.getElementById("feels_like"),
  humidity: document.getElementById("humidity"),
  pressure: document.getElementById("pressure"),
  clouds: document.getElementById("clouds"),
  wind: document.getElementById("wind"),
  location: document.getElementById("location"),
  img: document.getElementById("image"),
  date: document.getElementById("date"),
  input: document.getElementById("search"),
  icon: document.getElementById("image"),
  error: document.getElementById("error"),
  f: document.querySelector(".F"),
  c: document.querySelector(".C"),
  searchBtn: document.querySelector(".details-head-buttons-search"),
  searchCont: document.querySelector(".details-head-searchCont"),
  searchSVG: document.querySelector(".details-head-buttons-search_searchIcon"),
  detailsBlock: document.querySelector(".details-block"),
  tempCont: document.querySelector(".main-info-primary"),
  infoCont: document.querySelector(".main-info"),
  loadIcon: document.querySelector(".load_icon"),
  loadBg: document.querySelector(".load"),
};

elems.loadIcon.src = loadSrc;

function setUIColor(src) {
  const fac = new FastAverageColor();

  const bg = new Image();
  bg.src = src;

  fac
    .getColorAsync(bg)
    .then((color) => {
      elems.searchBtn.style.backgroundColor = color.hex;
      elems.f.style.backgroundColor = color.hex;
      elems.c.style.backgroundColor = color.hex;
      elems.searchCont.style.backgroundColor = color.hex;
      elems.detailsBlock.style.borderColor = color.hex;
    })
    .catch((err) => {
      console.log(err);
    });
}

function activateSearch() {
  elems.searchCont.classList.add("active");
  setTimeout(() => {
    elems.input.focus();
  }, 700);
}

const tablet = window.matchMedia("(max-width: 1000px)");
const mobile = window.matchMedia("(max-width: 650px)");

function handleTabletSize(size) {
  if (size.matches) {
    elems.tempCont.append(elems.icon);
  } else {
    elems.infoCont.append(elems.icon);
  }
}

function handleMobileSize(size) {
  if (size.matches) {
    elems.infoCont.append(elems.icon);
  }
}

mobile.addListener(handleMobileSize);
tablet.addListener(handleTabletSize);
handleTabletSize(tablet);
handleMobileSize(mobile);

const white = "rgb(235, 235, 235)";
const black = "rgb(14, 14, 14)";

function setTextColor(colorStr) {
  elems.html.style.color = colorStr;
  elems.searchSVG.style.fill = colorStr;
  elems.input.style.color = colorStr;
  elems.input.style.borderColor = colorStr;
}

function showLoadingScreen() {
  elems.loadBg.style.transform = "scale(1)";
}

function hideLoadingScreen() {
  elems.loadBg.style.transform = "scale(0)";
}

function checkUnit() {
  return elems.c.classList.contains("active") ? "metric" : "imperial";
}

function setClimateBackground(id, icon) {
  const idArray = Array.from(`${id}`);
  const iconArray = Array.from(`${icon}`);
  const firstNumStr = idArray[0];
  const stateOfDay = iconArray[iconArray.length - 1];
  console.log(stateOfDay);

  let src;
  switch (firstNumStr) {
    case "2":
      src = day200;
      setTextColor(white);
      break;
    case "3":
      src = day300;
      setTextColor(white);
      break;
    case "5":
      src = day500;
      setTextColor(white);
      break;
    case "6":
      src = day600;
      setTextColor(black);
      break;
    case "7":
      src = day700;
      setTextColor(black);
      break;
    case "8":
      if (stateOfDay === "d") {
        src = day800;
        setTextColor(black);
      } else if (stateOfDay === "n") {
        src = night800;
        setTextColor(white);
      }
      break;
  }
  elems.body.style.backgroundImage = `url(${src})`;
  setUIColor(src);
}

export {
  activateSearch,
  showLoadingScreen,
  hideLoadingScreen,
  checkUnit,
  setClimateBackground,
  elems,
};
