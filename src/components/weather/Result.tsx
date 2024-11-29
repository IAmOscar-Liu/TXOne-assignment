import humidityIcon from "../../assets/humidity.svg";
import pinIcon from "../../assets/pin.svg";
import temperatureIcon from "../../assets/temperature.svg";
import { NOT_FOUND_COD } from "../../constants";
import { WeatherInfo } from "../../types/Weather";
import formatTodayTime from "../../utils/formatTodayTime";
import getWeatherIcon from "../../utils/getWeatherIcon";
import NoData from "./NoData";

function Result({ result }: { result: WeatherInfo }) {
  return result.cod === NOT_FOUND_COD ? (
    <NoData />
  ) : (
    <>
      <div className="flex justify-between px-6">
        <h1 className="flex items-center text-xl font-bold text-primary">
          <img src={pinIcon} alt="" width={24} height={24} />
          <span className="ms-2">{result.name}</span>
        </h1>
        <p className="text-sm text-primary">{formatTodayTime()}</p>
      </div>

      <div className="flex flex-grow items-center justify-center">
        <img
          src={getWeatherIcon(result.weather[0].description)}
          alt=""
          width={128}
          height={128}
        />
        <div className="text-primary">
          <p className="text-[64px]">{Math.round(result.main.temp)}℃</p>
          <p className="text-2xl">{result.weather[0].main}</p>
          <p>{result.weather[0].description}</p>
        </div>
      </div>

      <div className="flex justify-between px-6">
        <p className="flex items-center text-primary">
          <img src={humidityIcon} alt="" width={24} height={24} />
          <span className="ms-2">Humidity: {result.main.humidity}%</span>
        </p>
        <p className="flex items-center text-primary">
          <img src={temperatureIcon} alt="" width={24} height={24} />
          <span className="ms-2">
            Temperature {Math.round(result.main.temp_min)}℃ ~{" "}
            {Math.round(result.main.temp_max)}℃
          </span>
        </p>
      </div>
    </>
  );
}

export default Result;
