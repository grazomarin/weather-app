'use client';

import { useEffect, useState } from 'react';
import WeatherScene from '@/components/3d/WeatherScene';
import { useGeocode, useWeather } from '@/hooks/useWeather';

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const [location, setLocation] = useState('');
  const [coords, setCoords] = useState<{ lat?: number, lon?: number }>({});

  const { data: geocodeData } = useGeocode({ lat: coords.lat, lon: coords.lon });

  useEffect(() => {
    if (geocodeData?.city) {
      setLocation(geocodeData.city);
    }
  }, [geocodeData]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
        },
        (error) => {
          console.warn("Geolocation Error:", error);
          setLocation('London'); // Fallback
        }
      );
    } else {
      setLocation('London');
    }
  }, []);

  const { data: weather, isLoading, error } = useWeather({ location, unit: 'metric' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setLocation(searchInput.trim());
      setSearchInput('');
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 3D Background */}
      <WeatherScene
        temperature={weather?.main?.temp}
        condition={weather?.weather?.[0]?.main}
      />

      {/* UI Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none p-6 md:p-12 flex flex-col justify-between">

        {/* Top Bar: Search */}
        <div className="flex justify-center pointer-events-auto">
          <form onSubmit={handleSearch} className="flex bg-white/10 backdrop-blur-md rounded-full shadow-lg overflow-hidden border border-white/20 transition hover:border-white/40">
            <input
              type="text"
              placeholder="Search city..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-transparent text-white px-6 py-3 outline-none w-64 md:w-96 placeholder-white/50"
            />
            <button type="submit" className="px-6 py-3 bg-white/20 hover:bg-white/30 transition font-semibold">
              Search
            </button>
          </form>
        </div>

        {/* Center/Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-end pb-8">

          {/* Main Weather Info */}
          <div className="pointer-events-auto bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
            {isLoading ? (
              <div className="animate-pulse flex flex-col gap-4">
                <div className="h-12 w-48 bg-white/20 rounded"></div>
                <div className="h-24 w-32 bg-white/20 rounded"></div>
              </div>
            ) : error ? (
              <div className="text-red-400">
                <h2 className="text-2xl font-bold">Error</h2>
                <p>{error instanceof Error ? error.message : `Could not load weather for ${location}`}</p>
              </div>
            ) : weather ? (
              <div>
                <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-2">
                  {weather.name}
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-7xl md:text-9xl font-bold">
                    {Math.round(weather.main.temp)}°
                  </span>
                  <div className="flex flex-col text-xl text-white/70 font-medium">
                    <span>{weather.weather[0].main}</span>
                    <span>H: {Math.round(weather.main.temp_max)}° / L: {Math.round(weather.main.temp_min)}°</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {/* Details Sidebar */}
          {weather && (
            <div className="mt-8 md:mt-0 pointer-events-auto flex gap-4 md:flex-col md:min-w-[200px]">
              <div className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex-1">
                <h3 className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-1">Humidity</h3>
                <p className="text-3xl font-light">{weather.main.humidity}%</p>
              </div>
              <div className="bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 flex-1">
                <h3 className="text-white/50 text-sm font-semibold uppercase tracking-wider mb-1">Wind</h3>
                <p className="text-3xl font-light">{Math.round(weather.wind.speed)} m/s</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}
