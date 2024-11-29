import clearDayIcon from "../assets/weather/clear-day.svg";
import cloudyIcon from "../assets/weather/cloudy.svg";
import notAvailableIcon from "../assets/weather/not-available.svg";
import rainIcon from "../assets/weather/rain.svg";

export default function getWeatherIcon(description: string) {
  if (description.toLowerCase().includes("cloud")) {
    return cloudyIcon;
  } else if (description.toLowerCase().includes("rain")) {
    return rainIcon;
  } else if (description.toLowerCase().includes("clear")) {
    return clearDayIcon;
  } else {
    return notAvailableIcon;
  }
}
