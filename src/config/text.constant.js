const labels = {
  HUMIDITY: "Humidity",
  TEMPERATURE: "TEMPERATURE",
  WIND: "WIND",
  PRESSURE: "PRESSURE",
  VISIBILITY: "VISIBILITY",
  WIND_UNIT: "MPH",
  TEMPERATURE_UNIT: "C",
  PRESSURE_UNIT: "hPa",
  FEELS_LIKE:"FEELS LIKE",
  MIN:"MIN",
  MAX:"MAX"
};

const weatherImageTypes = {
  HAZE: "Haze",
  CLOUDS: "Clouds",
  RAIN: "Rain",
  SNOW: "Snow",
  DUST: "Dust",
  DRIZZLE: "Drizzle",
  FOG: "Fog",
  SMOKE: "Smoke",
  TORNADO: "Tornado"
};

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const ICON_BASE_URL = "https://openweathermap.org/img/w";
export { labels, weatherImageTypes, BASE_URL, ICON_BASE_URL };
