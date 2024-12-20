import { NOT_FOUND_COD } from "../constants";

export interface WeatherState {
  isLoading: boolean;
  error: any;
  city: string;
  country: string;
  weatherInfo: undefined | WeatherInfo;
}

export interface WeatherAction {
  getWeather: (city: string, country: string) => Promise<void>;
}

export type WeatherInfo =
  | { cod: typeof NOT_FOUND_COD; message: string }
  | {
      coord: {
        lon: number;
        lat: number;
      };
      weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
      }[];
      base: string;
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
      };
      visibility: number;
      wind: {
        speed: number;
        deg: number;
      };
      clouds: {
        all: number;
      };
      dt: number;
      sys: {
        type: number;
        id: number;
        country: string;
        sunrise: number;
        sunset: number;
      };
      timezone: number;
      id: number;
      name: string;
      cod: 200;
    };
