import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import {  
    CLOUDY
} from '../../constants/weathers';

const data = {
    temperature: 5,
    weatherState: CLOUDY,
    humidity: 60,
    wind: "10 m/s"
}

class WeatherLocation extends Component {
    render(){
        return(
            <div>
                <Location city="Santiago"/>
                <WeatherData data={ data }/>
            </div>
        );
    }
}

export default WeatherLocation;