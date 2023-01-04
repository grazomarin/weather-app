import { apiKey } from "./secured";

async function requestData(unit, location) {
  return new Promise((resolve, reject) => {
    const request = new Request(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`,
      {
        mode: "cors",
      }
    );

    fetch(request)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          resolve(data);
        } else {
          throw new Error("Enter a valid location");
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function requestIcon(name) {
  const request = new Request(
    `https://openweathermap.org/img/wn/${name}@2x.png`,
    {
      mode: "cors",
    }
  );

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      return response.url;
    } else {
      throw new Error("enter a vaild location");
    }
  } catch (error) {
    console.log(error);
  }
}

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

function CoordToCity(lat, lon) {
  return new Promise((resolve, reject) => {
    const request = new Request(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
      {
        mode: "cors",
      }
    );

    fetch(request)
      .then((location) => {
        return location.json();
      })
      .then((json) => {
        const city = json.city.split(" ");
        resolve(city[0]);
      })
      .catch(() => {
        reject(undefined);
      });
  });
}

export { requestData, requestIcon, getUserPosition, CoordToCity };
