import { create } from "zustand";
import { NOT_FOUND_COD } from "../constants";
import mockWeatherRes from "../data/mockWeatherRes";
import { WeatherAction, WeatherState } from "../types/Weather";
import waitFor from "../utils/waitFor";

export const useWeatherStore = create<WeatherState & WeatherAction>((set) => ({
  isLoading: false,
  error: null,
  city: "",
  country: "",
  weatherInfo: undefined,
  getWeather: async (city, country) => {
    set({
      city,
      country,
      isLoading: true,
      weatherInfo: undefined,
      error: null,
    });
    await waitFor(1000);
    if (city === "Taipei" && country === "TW") {
      set({
        isLoading: false,
        weatherInfo: mockWeatherRes,
        error: null,
      });
    } else {
      set({
        isLoading: false,
        weatherInfo: { cod: NOT_FOUND_COD, message: "City not found" },
        error: null,
      });
    }
  },
}));
