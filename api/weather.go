package handler

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type WeatherResponse struct {
	Temperature float64 `json:"temp"`
	Condition   string  `json:"condition"`
}

func Handler(w http.ResponseWriter, r *http.Request) {
	lat := r.URL.Query().Get("lat")
	lon := r.URL.Query().Get("lon")
	units := r.URL.Query().Get("units")

	if lat == "" || lon == "" || units == "" {
		http.Error(w, "Location is required", http.StatusBadRequest)
		return
	}

	apiKey := os.Getenv("API_KEY")
	weatherAPIURL := fmt.Sprintf(
		"https://api.openweathermap.org/data/3.0/onecall?lat=%s&lon=%s&appid=%s&units=%s",
		lat, lon, apiKey, units,
	)

	resp, err := http.Get(weatherAPIURL)
	if err != nil {
		http.Error(w, "Failed to fetch weather data", http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	w.Header().Set("Access-Control-Allow-Origin", "*") // Adjust as needed
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewDecoder(resp.Body).Decode(&w)
}
