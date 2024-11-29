import { WeatherInfo } from "../types/Weather";

const mockWeatherRes: WeatherInfo = {
  coord: {
    lon: 121.5319,
    lat: 25.0478,
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
  ],
  base: "stations",
  main: {
    temp: 19.7,
    feels_like: 18.64,
    temp_min: 18.91,
    temp_max: 20.74,
    pressure: 1020,
    humidity: 35,
    sea_level: 1020,
    grnd_level: 1019,
  },
  visibility: 10000,
  wind: {
    speed: 5.66,
    deg: 80,
  },
  clouds: {
    all: 20,
  },
  dt: 1732778237,
  sys: {
    type: 2,
    id: 266033,
    country: "TW",
    sunrise: 1732746004,
    sunset: 1732784639,
  },
  timezone: 28800,
  id: 1668341,
  name: "Taipei",
  cod: 200,
};

export default mockWeatherRes;
