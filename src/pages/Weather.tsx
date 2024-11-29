import { useShallow } from "zustand/shallow";
import Error from "../components/weather/Error";
import Loading from "../components/weather/Loading";
import NoData from "../components/weather/NoData";
import Result from "../components/weather/Result";
import Search from "../components/weather/Search";
import { useWeatherStore } from "../store/weatherStore";

function Weather() {
  const { isLoading, error, weatherInfo } = useWeatherStore(
    useShallow((state) => ({
      isLoading: state.isLoading,
      error: state.error,
      weatherInfo: state.weatherInfo,
    })),
  );

  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-thin">Today's Weather</h1>
      <div className="mt-8 max-w-[542px]">
        <Search />
      </div>
      <div className="ring-black-20 mt-8 flex aspect-[542/400] max-w-[542px] flex-col rounded-md bg-white py-6 ring-1">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error error={error} />
        ) : weatherInfo ? (
          <Result result={weatherInfo} />
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}

export default Weather;
