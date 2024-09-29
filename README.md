# Weather App

## Built With

### Frontend:

- React
- TypeScript
- Sass

Deployed on __Vercel__

### Backend:

- Go
- PostgreSQL

Deployed on __Remote__

## About

This is a dynamic weather app that allows users to get the latest weather information based either on their current location or the location that they inputted. The special feature about this app is that it's dynamically styled. The weather app automatically picks a background image and color palette to match current weather condition. The app is fully optimized for mobile, tablet and desktop.

## The Plan

The new implementation is still in progress, but my vision for it is as follows: The React + Sass frontend will be responsible for displaying all the data, while the Go + PostgreSQL backend will handle requests from the frontend for weather data and assets. When the frontend requests weather information, the backend will fetch the data from the OpenWeatherMap API and return it to the frontend. If the frontend requests assets like background images, the backend will retrieve them from the database and send them to the frontend.

> ## [Live Demo](https://grazomarin-weatherapp.vercel.app)
