import React from "react";
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="weatherExtraInfoCont__text">{`Humedad: ${humidity}  %`}</span>
        <span className="weatherExtraInfoCont__text">{`Vientos: ${wind}`}</span>
    </div>
)

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;