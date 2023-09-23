import React, { useContext } from "react";
import { Details } from "./styles/Details.styled";
import { DailyWeather } from "./DailyWeather";
import { Data } from "../Data";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Clear from "../images/sunny.png";
import Cloud from '../images/cloudy.png'
import Haze from '../images/haze.png'
import Rain from '../images/rain.png'
import Snow from '../images/snow.png'
import mist from '../images/mist.png'
import Drizzle from '../images/drizzle.png'
import Thunderstorm from '../images/Thunderstorm.png'
import Smoke from '../images/Smoke.png'

export const WeatherInfo = () => {
  const { apiCurrentUrl, fetch, apiDailyUrl } = useContext(Data);
  let icon = Clear

  const { data } = useQuery(["weather", fetch], async () => {
    if (fetch) {
      const res = await axios.all([
        axios.get(apiCurrentUrl),
        axios.get(apiDailyUrl)
      ])
      return res;
    } else {
      return null;
    }
  });

  const currentInfo = data && data[0].data;
  const dailyInfo = data && data[1].data

  switch (currentInfo?.weather[0].main) {
    case 'Clouds':
      icon = Cloud
      break
    case 'Haze':
      icon = Haze
      break
    case 'Clear':
      icon = Clear
      break
    case 'Rain':
      icon = Rain
      break
    case 'Snow':
      icon = Snow
      break
    case 'Thunderstorm':
      icon = Thunderstorm
      break
    case 'Smoke':
      icon = Smoke
      break
    case 'Mist':
      icon = mist
      break
    case 'Drizzle':
      icon = Drizzle
      break
    default:
      icon = Clear
  }

  return (
    <React.Fragment>
      <Details>
        <div className="descriptions">
          <img src={icon} alt="" />
          <div className="descriptions-text">
            <p>Today</p>
            <h1>{currentInfo ? currentInfo.name : "City Name"}</h1>
            <p>
              {currentInfo ? `Temprature: ${currentInfo.main.temp}°C` : "Temprature: temp(°C)"}
            </p>
            <p>
              {currentInfo ? currentInfo.weather[0].main : "Weather"},{" "}
              {currentInfo ? currentInfo.weather[0].description : "Description"}
            </p>
          </div>
        </div>
        <DailyWeather info={dailyInfo} />
      </Details>
    </React.Fragment>
  );
};