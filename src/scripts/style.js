import searchSrc from "../images/search-icon.svg";
import night800 from "../images/clearNight.jpg";
import day800 from "../images/clearDay.jpg";
import day700 from "../images/mist.jpg";
import day600 from "../images/snowDay.jpg";
import day500 from "../images/rain.jpg";
import day300 from "../images/rain.jpg";
import day200 from "../images/thunderstorm.jpg";
import { FastAverageColor } from "fast-average-color";

const searchBtn = document.querySelector(".details-head-buttons-search");
const searchSVG = document.querySelector(
  ".details-head-buttons-search_searchIcon"
);
const degrees = document.querySelectorAll(".details-head-buttons_setDegree");
const searchCont = document.querySelector(".details-head-searchCont");
const searchInput = document.getElementById("search");
const detailsBlock = document.querySelector(".details-block");
const body = document.querySelector("body");
const html = document.querySelector("html");
const input = document.getElementById("search");

function setUIColor(src) {
  const fac = new FastAverageColor();

  const bg = new Image();
  bg.src = src;

  fac
    .getColorAsync(bg)
    .then((color) => {
      searchBtn.style.backgroundColor = color.hex;
      degrees[0].style.backgroundColor = color.hex;
      degrees[1].style.backgroundColor = color.hex;
      searchCont.style.backgroundColor = color.hex;
      detailsBlock.style.borderColor = color.hex;
    })
    .catch((err) => {
      console.log(err);
    });
}

function activateSearch() {
  searchCont.classList.add("active");
  setTimeout(() => {
    searchInput.focus();
  }, 700);
}

const tablet = window.matchMedia("(max-width: 1000px)");
const mobile = window.matchMedia("(max-width: 650px)");
const tempCont = document.querySelector(".main-info-primary");
const infoCont = document.querySelector(".main-info");
const icon = document.getElementById("image");

function handleTabletSize(size) {
  if (size.matches) {
    tempCont.append(icon);
  } else {
    infoCont.append(icon);
  }
}

function handleMobileSize(size) {
  if (size.matches) {
    infoCont.append(icon);
  }
}

mobile.addListener(handleMobileSize);
tablet.addListener(handleTabletSize);
handleTabletSize(tablet);
handleMobileSize(mobile);

const white = "rgb(235, 235, 235)";
const black = "rgb(14, 14, 14)";

function setTextColor(colorStr) {
  html.style.color = colorStr;
  searchSVG.style.fill = colorStr;
  input.style.color = colorStr;
  input.style.borderColor = colorStr;
}

function setClimateBackground(id) {
  const firstNumStr = Array.from(`${id}`)[0];

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
      src = day800;
      setTextColor(black);
      break;
  }
  body.style.backgroundImage = `url(${src})`;
  setUIColor(src);
}

export { activateSearch, setClimateBackground };
