import dateFormat, { masks } from "dateformat";

function round(number) {
  return Math.round(number * 10) / 10;
}

function celciusToFarenheit(number) {
  return (+number * 9) / 5 + 32;
}
function farenheitToCelcius(number) {
  return ((+number - 32) * 5) / 9;
}

function tzToDate(seconds) {
  const difference = +seconds / 3600;
  const date = new Date();
  date.setHours(date.getUTCHours() + difference);
  return dateFormat(date, "h:MMTT dddd, mmmm dS yyyy");
}

const updateTime = (elem, timezone) => {
  const int = setInterval(() => {
    elem.textContent = tzToDate(timezone);
  }, 1000);
  return int;
};

export { round, celciusToFarenheit, farenheitToCelcius, tzToDate, updateTime };
