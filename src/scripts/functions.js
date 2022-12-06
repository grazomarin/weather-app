import dateFormat, { masks } from "dateformat";

function round(number) {
  return Math.round(number * 10) / 10;
}

function celciusToFarenheit(...numbers) {}

function tzToDate(seconds) {
  const difference = +seconds / 3600;
  const date = new Date();
  date.setHours(date.getUTCHours() + difference);
  return dateFormat(date, "h:MMTT dddd, mmmm dS yyyy");
}

function updateTime(elem, timezone) {
  elem.textContent = tzToDate(timezone);
}

export { round, tzToDate, updateTime };
