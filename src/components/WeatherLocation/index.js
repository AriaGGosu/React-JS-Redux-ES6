import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import {  
    CLOUDY
} from '../../constants/weathers';
import api_weather from '../../constants/api_weather';
import getWeatherFromApi from '../../services/getWeatherFromApi';

const data = {
    temperature: 0,
    weatherState: CLOUDY,
    humidity: 0,
    wind: "0 m/s"
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Santiago",
            data: data
        }
    }

    componentWillMount() {
        fetch(api_weather)
        .then(res => res.json())
        .then(apiData => {
            const newWeather = getWeatherFromApi(apiData);
            this.setState({ data: newWeather});
        });
        
    }

    render(){
        const { city, data } = this.state; 

        return(
            <div>
                <Location city={city}/>
                <WeatherData data={ data }/>
            </div>
        );
    }
}

export default WeatherLocation;