import { useEffect } from "react";
import MainInformation from "./components/MainInformation";
import WeatherDetails from "./components/WeatherDetails";
import { getUserPosition } from "./utils/api.tsx";

function App() {
	useEffect(() => {
		const fetchData = async () => {
			const position = await getUserPosition();
			if (position) {
				const { lat, lon } = position;
				const response = await fetch(
					new Request(`/api/weather?lat=${lat}&lon=${lon}&units=${"metric"}`, {
						mode: "cors",
					})
				);
				console.log(response);
			} else {
				console.error("Unable to get user position");
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="load">
				<img className="load_icon" />
			</div>
			<div id="container">
				<MainInformation />
				<WeatherDetails />
			</div>
		</>
	);
}

export default App;
