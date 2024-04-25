
import { WiHumidity } from "react-icons/wi";
import { BsEye } from "react-icons/bs";
import { MdOutlineWindPower } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import { IoSpeedometerSharp } from "react-icons/io5";
import AnimatedWeather from "./AnimatedWeather";
import PropTypes from "prop-types";
import { labels } from "../config/text.constant";
const WeatherReport = (props) => {
  const { weatherData } = props;

  const {
    cityName,
    minTemp,
    maxTemp,
    temp,
    humidity,
    wind,
    visibility,
    weather,
    country,
    feels_like,
    pressure,
    weatherIconSrc
  } = weatherData;
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();

  // Get the current day
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[currentDate.getDay()];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = months[currentDate.getMonth()];

  return (
    <div className="w-full p-2 mt-5 relative h-[90%]">
      <div className="flex items-center justify-center">
        <AnimatedWeather weather={weather} />
      </div>

      <h1 className="text-center text-4xl font-semibold text-gray-800 tracking-wider">
        {temp}
        <sup className="font-normal">o</sup> C
      </h1>
      <p className="text-2xl font-semibold text-gray-800 tracking-wider mt-2 flex items-center justify-center gap-4">
        <img src={weatherIconSrc} alt="weather"/>
        {weather}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-5 text-center mb-10">
        <div className="h-20 glassEffect">
          <p className="p-1 border-b-[1px] border-gray-300 flex items-center gap-1 justify-center text-sm lg:text-lg">
            <WiHumidity className="text-lg lg:text-xl" />
            {labels?.HUMIDITY}
          </p>
          <p className="text-xl lg:text-2xl p-2">{humidity}%</p>
        </div>
        <div className="h-20 glassEffect">
          <p className="p-1 border-b-[1px] border-gray-300 flex items-center gap-1 justify-center">
            <BsEye className="text-lg lg:text-xl" />
            {labels?.VISIBILITY}
          </p>
          <p className="text-xl lg:text-2xl p-2">{visibility}</p>
        </div>
        <div className="glassEffect">
          <p className="p-1 border-b-[1px] border-gray-300 flex items-center gap-1 justify-center">
            <MdOutlineWindPower className="text-lg lg:text-xl" />
            {labels?.WIND}
          </p>
          <div className=" text-sm p-2">
            <p>Speed : {wind?.speed} {labels?.WIND_UNIT}</p>
            <p>Gust : {wind?.gust} {labels?.WIND_UNIT}</p>
          </div>
        </div>
        <div className="h-20 glassEffect">
          <p className="p-1 border-b-[1px] border-gray-300 flex items-center gap-1 justify-center">
            <FaTemperatureHigh className="text-lg lg:text-xl" />
            {labels?.FEELS_LIKE}
          </p>
          <p className="text-xl lg:text-2xl p-2">
            {feels_like}
            <sup className="font-normal">o</sup> C
          </p>
        </div>
        <div className="h-20 glassEffect">
          <p className="p-1 border-b-[1px] border-gray-300 flex items-center gap-1 justify-center">
            <IoSpeedometerSharp className="text-lg lg:text-xl" />
            {labels?.PRESSURE}
          </p>
          <p className="text-xl lg:text-2xl p-2">{pressure} {labels?.PRESSURE_UNIT}</p>
        </div>

        <div className="glassEffect">
          <p className="p-1 border-b-[1px] border-gray-300 flex items-center gap-1 justify-center">
            <FaTemperatureHigh className="text-lg lg:text-xl" />
            {labels?.TEMPERATURE}
          </p>
          <div className=" text-sm p-2">
            <p>
              {labels?.MAX} : {minTemp}
              <sup className="font-normal">o</sup> {labels?.TEMPERATURE_UNIT}
            </p>
            <p>
              {labels?.MIN} : {maxTemp}
              <sup className="font-normal">o</sup> {labels?.TEMPERATURE_UNIT}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-between w-full flex-wrap-reverse left-0  px-1 py-2">
        <p className="text-sm lg:text-lg">
          {`${currentTime} , ${currentDay} ${currentMonth} ${currentDate?.getDay()} ${currentDate?.getFullYear()}`}
        </p>
        <p className="text-sm lg:text-lg">
          {cityName} , {country}
        </p>
      </div>
    </div>
  );
};

export default WeatherReport;

WeatherReport.propTypes = {
  weatherData: {
    cityName : PropTypes.string,
    minTemp : PropTypes.number,
    maxTemp:PropTypes.number,
    temp:PropTypes.number,
    humidity:PropTypes.number,
    wind:{
      speed:PropTypes.number,
      gust:PropTypes.number,
    },
    visibility:PropTypes.number,
    weather:PropTypes.string,
    country:PropTypes.string,
    feels_like:PropTypes.number,
    pressure:PropTypes.number,
    weatherIconSrc: PropTypes.string
  },
};
WeatherReport.defaultProp = {
  weatherData: null,
};
