import "./index.scss";
import "./scripts/style";
import { requestWeather } from "./scripts/api";

function getUserPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

getUserPosition()
  .then(async (data) => {
    try {
      const lat = data.coords.latitude;
      const lon = data.coords.longitude;
      const weather = await requestWeather(undefined, lat, lon);
      console.log(weather);
    } catch (error) {
      console.error(error);
    }
  })
  .catch(async () => {
    try {
      const data = await requestWeather("new york");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  });
