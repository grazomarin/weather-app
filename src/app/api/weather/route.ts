import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const location = searchParams.get("location");
	const unit = searchParams.get("unit") || "metric";

	if (!location) {
		return NextResponse.json(
			{ error: "Location is required" },
			{ status: 400 },
		);
	}

	const apiKey = process.env.API_KEY;
	if (!apiKey) {
		return NextResponse.json(
			{ error: "API key not configured" },
			{ status: 500 },
		);
	}

	try {
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`,
		);
		if (!res.ok) {
			const errorData = await res.json().catch(() => ({}));
			return NextResponse.json(
				{
					error:
						errorData.message ||
						`OpenWeatherMap API responded with status: ${res.status}`,
				},
				{ status: res.status },
			);
		}
		const data = await res.json();
		return NextResponse.json(data);
	} catch (error) {
		console.error("Weather Fetch Error", error);
		return NextResponse.json(
			{ error: "Failed to fetch weather data" },
			{ status: 500 },
		);
	}
}
