import { FormEvent, useState } from "react";
import { useShallow } from "zustand/shallow";
import { NOT_FOUND_COD } from "../../constants";
import { useWeatherStore } from "../../store/weatherStore";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import cn from "../../utils/cn";

const inputClassName = (isNotFound: boolean) =>
  cn(
    "placeholder-shown:border-black-20 h-10 w-[132px] rounded-[4px] border-[1.5px] border-primary bg-white ps-2 text-sm",
    {
      "placeholder-shown:border-danger border-danger": isNotFound,
    },
  );

function search() {
  const { isLoading, initialCity, initialCountry, weatherInfo, getWeather } =
    useWeatherStore(
      useShallow((state) => ({
        isLoading: state.isLoading,
        initialCity: state.city,
        initialCountry: state.country,
        weatherInfo: state.weatherInfo,
        getWeather: state.getWeather,
      })),
    );
  const [city, setCity] = useState(initialCity);
  const [country, setCountry] = useState(initialCountry);

  const disabled = isLoading || !city || !country;
  const isNotFound = weatherInfo?.cod === NOT_FOUND_COD;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disabled) return;
    getWeather(city, country);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
        <div className="flex items-center">
          <label htmlFor="city" className="pe-3">
            City
          </label>
          <input
            required
            id="city"
            type="text"
            placeholder=""
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={inputClassName(isNotFound)}
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="country" className="pe-3">
            Country
          </label>
          <input
            required
            id="country"
            type="text"
            placeholder=""
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className={inputClassName(isNotFound)}
          />
        </div>
        <button
          disabled={disabled}
          className="hover:bg-primary-hover disabled:bg-primary-disabled ms-auto h-10 w-[138px] rounded-[4px] bg-primary text-white outline-none"
        >
          Search
        </button>
      </form>
      {isNotFound && (
        <p className="text-danger mt-2 ps-10">
          {capitalizeFirstLetter(weatherInfo.message)}
        </p>
      )}
    </>
  );
}

export default search;
