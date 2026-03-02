import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const lat = searchParams.get("lat");
	const lon = searchParams.get("lon");

	if (!lat || !lon) {
		return NextResponse.json(
			{ error: "Latitude and Longitude are required" },
			{ status: 400 },
		);
	}

	try {
		const res = await fetch(
			`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`,
		);
		if (!res.ok) {
			throw new Error(
				`Reverse Geocode API responded with status: ${res.status}`,
			);
		}
		const data = await res.json();
		const city = data.city ? data.city.split(" ")[0] : "Unknown";
		return NextResponse.json({ city });
	} catch (error) {
		console.error("Geocode Fetch Error", error);
		return NextResponse.json(
			{ error: "Failed to fetch geocode data" },
			{ status: 500 },
		);
	}
}
