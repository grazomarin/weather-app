import { useQuery } from "@tanstack/react-query";

interface WeatherParams {
	location?: string;
	unit?: "metric" | "imperial";
}

export function useWeather({ location, unit = "metric" }: WeatherParams) {
	return useQuery({
		queryKey: ["weather", location, unit],
		queryFn: async () => {
			if (!location) throw new Error("Location is required");
			const res = await fetch(
				`/api/weather?location=${encodeURIComponent(location)}&unit=${unit}`,
			);
			if (!res.ok) {
				const errorData = await res.json().catch(() => ({}));
				throw new Error(errorData.error || "Failed to fetch weather data");
			}
			return res.json();
		},
		enabled: !!location,
	});
}

interface GeocodeParams {
	lat?: number;
	lon?: number;
}

export function useGeocode({ lat, lon }: GeocodeParams) {
	return useQuery({
		queryKey: ["geocode", lat, lon],
		queryFn: async () => {
			if (!lat || !lon) throw new Error("Coordinates are required");
			const res = await fetch(`/api/geocode?lat=${lat}&lon=${lon}`);
			if (!res.ok) {
				throw new Error("Failed to reverse geocode");
			}
			return res.json();
		},
		enabled: !!lat && !!lon,
	});
}
