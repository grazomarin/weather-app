async function fetchKey() {
	// TODO handle error request
	const request = new Request("http://localhost:8888/api-key");
	const response = await fetch(request);
	const data = await response.json();
	return data.apiKey;
}

// type Unit = "metric" | "imperial";

// async function requestData(unit: Unit, location: string) {
// const request = new Request(
// 	`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`,
// 	{
// 		mode: "cors",
// 	}
// );
// const response = await fetch(request);
// if (response.ok) {
// 	const data = await response.json();
// 	return data;
// } else {
// 	throw new Error("Enter a valid location");
// }
// // //
// return new Promise((resolve, reject) => {
//   const request = new Request(
//     `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`,
//     {
//       mode: "cors",
//     }
//   );
//   fetch(request)
//     .then(async (response) => {
//       if (response.ok) {
//         const data = await response.json();
//         resolve(data);
//       } else {
//         throw new Error("Enter a valid location");
//       }
//     })
//     .catch((err) => {
//       reject(err);
//     });
// });
// }

async function requestIcon(name: string) {
	const request = new Request(`https://openweathermap.org/img/wn/${name}@2x.png`, {
		mode: "cors",
	});

	try {
		const response = await fetch(request);
		if (response.ok) {
			return response.url;
		} else {
			throw new Error("enter a vaild location");
		}
	} catch (error) {
		console.log(error);
	}
}

async function getUserPosition(): Promise<{ lat: number; lon: number } | undefined> {
	try {
		const position: GeolocationPosition = await new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(resolve, reject);
		});

		const lat = Math.round(position.coords.latitude);
		const lon = Math.round(position.coords.longitude);

		return { lat, lon };
	} catch (error) {
		return undefined;
	}

	// return new Promise((resolve, reject) => {
	// 	navigator.geolocation.getCurrentPosition(resolve, reject);
	// })
	// 	.then((data) => {
	// 		const lat = data.coords.latitude;
	// 		const lon = data.coords.longitude;
	// 		return { lat, lon };
	// 	})
	// 	.catch(() => {
	// 		return undefined;
	// 	});
}

async function CoordToCity(lat: number, lon: number) {
	const request = new Request(
		`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
		{
			mode: "cors",
		}
	);

	const location = await fetch(request);
	const json = await location.json();
	const city = json.city.split(" ")[0];
	return city;

	// return new Promise((resolve, reject) => {
	// 	const request = new Request(
	// 		`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
	// 		{
	// 			mode: 'cors',
	// 		}
	// 	);

	// 	fetch(request)
	// 		.then((location) => {
	// 			return location.json();
	// 		})
	// 		.then((json) => {
	// 			const city = json.city.split(' ');
	// 			resolve(city[0]);
	// 		})
	// 		.catch(() => {
	// 			reject(undefined);
	// 		});
	// });
}

// add requestData back
export { fetchKey, requestIcon, getUserPosition, CoordToCity };
