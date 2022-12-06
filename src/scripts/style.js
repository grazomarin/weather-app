import searchSrc from "../images/search-icon.svg";
import bgSrc from "../images/clouds.jpg";
import { FastAverageColor } from "fast-average-color";
const bg = new Image();
const searchImg = new Image(30, 30);

const searchBtn = document.querySelector(".details-head-buttons-search");
const degrees = document.querySelectorAll(".details-head-buttons_setDegree");
const searchCont = document.querySelector(".details-head-searchCont");
const searchInput = document.getElementById("search");

bg.src = bgSrc;
searchImg.src = searchSrc;
searchBtn.append(searchImg);

const fac = new FastAverageColor();

fac
  .getColorAsync(bg)
  .then((color) => {
    searchBtn.style.backgroundColor = color.hex;
    degrees[0].style.backgroundColor = color.hex;
    degrees[1].style.backgroundColor = color.hex;
  })
  .catch((err) => {
    console.log(err);
  });

function activateSearch() {
  searchCont.classList.add("active");
  setTimeout(() => {
    searchInput.focus();
  }, 700);
}

export { activateSearch };
