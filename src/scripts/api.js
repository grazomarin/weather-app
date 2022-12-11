import { apiKey } from "./secured";

async function requestData(unit, location, lat, lon) {
  return new Promise((resolve, reject) => {
    const request = new Request(
      `https://api.openweathermap.org/data/2.5/weather?${
        location ? `q=${location}` : `lat=${lat}&lon=${lon}`
      }&appid=${apiKey}&units=${unit}`,
      {
        mode: "cors",
      }
    );

    fetch(request)
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
          console.log(data);
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
    `http://openweathermap.org/img/wn/${name}@2x.png`,
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

export { requestData, requestIcon };
