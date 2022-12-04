import { apiKey } from "./secured";

async function requestData(location, lat, lon) {
  const request = new Request(
    `https://api.openweathermap.org/data/2.5/weather?${
      location ? `q=${location}` : `lat=${lat}&lon=${lon}`
    }&appid=${apiKey}&units=metric`,
    {
      mode: "cors",
    }
  );

  try {
    const response = await fetch(request);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("enter a vaild location");
    }
  } catch (error) {
    console.error(error);
  }
}
export { requestData };

// async function requestIcon(name)
