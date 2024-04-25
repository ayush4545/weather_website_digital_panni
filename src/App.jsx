import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import WeatherReport from "./components/WeatherReport";
import BackgroundLayout from "./components/BackgroundLayout";
import { BASE_URL, ICON_BASE_URL } from "./config/text.constant";
import Loader from "./components/Loader";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading,setIsLoading]=useState(false)
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const convertKelvinToCelcius = (temp) => {
    return Math.floor(Number(temp) - 273.15);
  };
  const handleClick = async () => {
    try {
      setIsLoading(true)
      const apiKey = import.meta.env.VITE_API_KEY;
      const res = await fetch(`${BASE_URL}?q=${city}&appid=${apiKey}`);
      const resData = await res.json();

      if (resData?.cod === 200) {
        let obj = {
          cityName: resData?.name,
          minTemp: convertKelvinToCelcius(resData?.main?.temp_min),
          maxTemp: convertKelvinToCelcius(resData?.main?.temp_max),
          temp: convertKelvinToCelcius(resData?.main?.temp),
          humidity: resData?.main?.humidity,
          wind: resData?.wind,
          visibility: resData?.visibility,
          weather: resData?.weather?.[0]?.main,
          country: resData?.sys?.country,
          feels_like: convertKelvinToCelcius(resData?.main?.feels_like),
          pressure: resData?.main?.pressure,
          weatherIconSrc: `${ICON_BASE_URL}/${resData?.weather?.[0]?.icon}.png`,
        };

        setWeatherCondition(resData?.weather[0]?.main);
        setWeather(obj);
        setCity("");
      } else if (resData?.cod == 404) {
        setError(true);
      } else {
        setError(false);
      }
    } catch (error) {
      console.log(100, error);
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <BackgroundLayout weatherCondition={weatherCondition} />
      <div className="w-2/3 lg:w-2/4 h-4/5 glassEffect grid grid-cols-1 overflow-y-auto">
        <div className="col-span-1 w-full h-full p-4">
          <div className="flex items-center border-b-2 border-gray-800">
            <input
              type="text"
              placeholder="Search City Name"
              value={city}
              onChange={handleChange}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  handleClick();
                }
              }}
              className="w-full h-10 px-3 pl-1 rounded-md bg-transparent placeholder:text-gray-800 text-gray-900 outline-none"
            />
            <IoSearch
              className="text-gray-800 text-xl cursor-pointer"
              onClick={handleClick}
            />
          </div>

          {weather && <WeatherReport weatherData={weather} />}
          {!weather && error && (
            <p className="text-gray-900 text-center font-bold mt-20 text-lg lg:text-3xl">
              {city} Not Found
            </p>
          )}

          {isLoading && <Loader/>}
        </div>
      </div>
    </div>
  );
}

export default App;
