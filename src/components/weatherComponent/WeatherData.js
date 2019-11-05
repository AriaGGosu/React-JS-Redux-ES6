import React from "react";
import WeatherTemperature from "./weatherDataComponent/WeatherTemperature";
import WeatherExtraInfo from "./weatherDataComponent/WeatherExtraInfo";

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature/>
            <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
        </div>
    )
}

export default WeatherData;