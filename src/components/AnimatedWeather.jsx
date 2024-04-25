import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactAnimatedWeather from "react-animated-weather";
import { weatherImageTypes } from "../config/text.constant";
const defaults = {
  color: "rgb(31,41,55)",
  size: 60,
  animate: true,
};
const AnimatedWeather = (props) => {
  const { weather } = props;
  const [icon, setIcon] = useState("CLEAR_DAY");

  useEffect(() => {
    if (weather) {
      switch (weather) {
        case weatherImageTypes.HAZE:
          setIcon({ icon: "CLEAR_DAY" });
          break;
        case weatherImageTypes.CLOUDS:
          setIcon("CLOUDY");
          break;
        case weatherImageTypes.RAIN:
          setIcon("RAIN");
          break;
        case weatherImageTypes.SNOW:
          setIcon("SNOW");
          break;
        case weatherImageTypes.DUST:
          setIcon("WIND");
          break;
        case weatherImageTypes.DRIZZLE:
          setIcon("SLEET");
          break;
        case weatherImageTypes.FOG:
          setIcon("FOG");
          break;
        case weatherImageTypes.SMOKE:
          setIcon("FOG");
          break;
        case weatherImageTypes.TORNADO:
          setIcon("WIND");
          break;
        default:
          setIcon("CLEAR_DAY");
      }
    }
  }, [weather]);

  return (
    <ReactAnimatedWeather
      icon={icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
  );
};

export default AnimatedWeather;
AnimatedWeather.propTypes = {
  weather: PropTypes.string,
};
AnimatedWeather.defaultProp = {
  weather: null,
};
