import "./index.scss";
import { requestData } from "./scripts/api";

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

(async () => {
  const { lat, lon } = await getUserPosition();
  console.log(await requestData(undefined, lat, lon));
})();
