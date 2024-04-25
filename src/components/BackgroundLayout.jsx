import  { useEffect, useState } from 'react'
import PropTypes from "prop-types"
//images
import Clear from '../assets/images/Clear.jpg'
import Fog from '../assets/images/fog.png'
import Cloudy from '../assets/images/Cloudy.jpg'
import Rainy from '../assets/images/Rainy.jpg'
import Snow from '../assets/images/snow.jpg'
import Stormy from '../assets/images/Stormy.jpg'
import Sunny from '../assets/images/Sunny.jpg'
import { weatherImageTypes } from '../config/text.constant'

const BackgroundLayout = ({weatherCondition}) => {
  const [image, setImage] = useState(Clear)

  useEffect(() => {
    if (weatherCondition) {
      switch (weatherCondition) {
        case weatherImageTypes.HAZE:
          setImage(Sunny)
          break;
        case weatherImageTypes.CLOUDS:
            setImage(Cloudy)
          break;
        case weatherImageTypes.RAIN:
            setImage(Rainy)
          break;
        case weatherImageTypes.SNOW:
            setImage(Snow)
          break;
        case weatherImageTypes.DUST:
            setImage(Stormy)
          break;
        case weatherImageTypes.DRIZZLE:
            setImage(Snow)
          break;
        case weatherImageTypes.FOG:
          setImage(Fog)
          break;
        case weatherImageTypes.SMOKE:
            setImage(Fog)
          break;
        case weatherImageTypes.TORNADO:
            setImage(Stormy)
          break;
        default:
            setImage(Sunny)
      }
    }
  }, [weatherCondition])

  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]' />
  )
}

export default BackgroundLayout

BackgroundLayout.propTypes={
  weatherCondition:PropTypes.string
}
BackgroundLayout.defaultProp={
  weatherCondition:null
}
