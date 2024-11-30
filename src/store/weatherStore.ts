import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { NOT_FOUND_COD } from "../constants";
import { WeatherAction, WeatherState } from "../types/Weather";

export const useWeatherStore = create<WeatherState & WeatherAction>()(
  devtools((set) => ({
    isLoading: false,
    error: null,
    city: "",
    country: "",
    weatherInfo: undefined,
    getWeather: async (city, country) => {
      try {
        set({
          city,
          country,
          isLoading: true,
          weatherInfo: undefined,
          error: null,
        });
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)},${encodeURI(country)}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API}`,
        );
        const statusCode = res.status;
        const json = await res.json();
        if (
          statusCode !== NOT_FOUND_COD &&
          (statusCode < 200 || statusCode >= 300)
        ) {
          return set({
            isLoading: false,
            weatherInfo: undefined,
            error: { code: statusCode, message: json },
          });
        }
        set({
          isLoading: false,
          weatherInfo: {
            ...json,
            cod: +json.cod,
          },
          error: null,
        });
      } catch (error) {
        set({ isLoading: false, weatherInfo: undefined, error });
      }
    },
  })),
);

// export const useWeatherStore = create<WeatherState & WeatherAction>((set) => ({
//   isLoading: false,
//   error: null,
//   city: "",
//   country: "",
//   weatherInfo: undefined,
//   getWeather: async (city, country) => {
//     try {
//       set({
//         city,
//         country,
//         isLoading: true,
//         weatherInfo: undefined,
//         error: null,
//       });
//       const res = await fetch(
//         `http://api.openweathermap.org/data/2.5/weather?q=${encodeURI(city)},${encodeURI(country)}&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API}`,
//       );
//       const statusCode = res.status;
//       const json = await res.json();
//       if (
//         statusCode !== NOT_FOUND_COD &&
//         (statusCode < 200 || statusCode >= 300)
//       ) {
//         return set({
//           isLoading: false,
//           weatherInfo: undefined,
//           error: { code: statusCode, message: json },
//         });
//       }
//       set({
//         isLoading: false,
//         weatherInfo: {
//           ...json,
//           cod: +json.cod,
//         },
//         error: null,
//       });
//     } catch (error) {
//       set({ isLoading: false, weatherInfo: undefined, error });
//     }
//   },
// }));
