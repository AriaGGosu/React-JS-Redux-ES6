import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import {  
    CLOUDY
} from '../../constants/weathers';
import api_weather from '../../constants/api_weather';
import getWeatherFromApi from '../../services/getWeatherFromApi';
import './style.css';

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
            city: "-",
            data: data
        }
    }

    componentWillMount() {
        fetch(api_weather)
        .then(res => res.json())
        .then(json => {
            const newWeather = getWeatherFromApi(json);
            const { name } = json;
            this.setState({ 
                city: name,
                data: newWeather});
        }).catch( err => console.log(err));
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