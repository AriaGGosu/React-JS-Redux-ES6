import React from "react";
import WeatherTemperature from "./weatherDataComponent/WeatherTemperature";
import WeatherExtraInfo from "./weatherDataComponent/WeatherExtraInfo";
import { 
    CLOUD, 
    CLOUDY, 
    SUN, 
    RAIN, 
    SNOW, 
    WINDY 
} from '../../constants/weathers';

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature 
                temperature={20} 
                weatherState={CLOUDY}
            />
            <WeatherExtraInfo 
                humidity={80} 
                wind={"10 m/s"}
            />
        </div>
    )
}

export default WeatherData;