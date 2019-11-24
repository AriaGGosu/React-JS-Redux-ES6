import React from "react"
import WeatherIcons from "react-weathericons";
import PropTypes from 'prop-types';
import './styles.css';


const getWeatherState = weatherState => {
    const sizeIcon = "4x";
    if (weatherState)
        return <WeatherIcons className="wicon" name={weatherState} size={sizeIcon}/>;
    else 
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon}/>;
};

const WeatherTemperature = ({ temperature, weatherState}) => (  
    <div className="weatherTemperatureCont"> 
        {
            getWeatherState(weatherState)
        }
        <span className="weatherTemperatureCont__temperature">{temperature}</span>
        <span className="weatherTemperatureCont__type">°C</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;