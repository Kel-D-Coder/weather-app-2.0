import { StyledDailyWeather } from "./styles/DailyWeather.styled";
import { days } from "../Data";
import cloud from "../images/cloudy.png";
import rain from "../images/rain.png";
import Moderate from '../images/drizzle.png'
import Thunderstorm from '../images/Thunderstorm.png'
import Scattered from '../images/Scattered clouds.png'
import Few from '../images/few-clouds.png'
import Sunny from '../images/sunny.png'

export const DailyWeather = ({ info }) => {
  let src = cloud;

  return (
    <StyledDailyWeather>
      {info?.data?.map((tem, index) => {
        if (index < 4) {
          switch (tem.weather.description) {
            case "Moderate rain":
              src = Moderate;
              break;
            case "Heavy rain":
              src = rain;
              break;
            case "Broken clouds":
              src = cloud;
              break;
            case 'Few clouds':
              src = Few
              break;
            case 'Thunderstorm with rain':
              src = Thunderstorm
              break;
            case 'Light rain':
              src = Moderate
              break
            case 'Scattered clouds':
              src = Scattered
              break
            default:
              src = Sunny
          }
          return (
            <div key={index}>
              <h3>{days[index]}</h3>
              <img src={src} alt="" />
              <h4>{`${tem.temp}°C`}</h4>
            </div>
          );
        } else {
          return null;
        }
      })}
    </StyledDailyWeather>
  );
};
