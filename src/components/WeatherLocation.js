import React from "react";
import Location from "./weatherComponent/Location";
import WeatherData from "./weatherComponent/WeatherData";

const WeatherLocation = () => (
    <div>
        <Location city="Santiago"/>
        <WeatherData/>
    </div>
)

export default WeatherLocation;