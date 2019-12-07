import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import makeApiUrl from '../../constants/api_weather';
import getWeatherFromApi from '../../services/getWeatherFromApi';
import './style.css';

class WeatherLocation extends Component {

    constructor(props){
        const { city } = props;
        super(props);
        this.state = {
            city,
            data: null
        }
    } 

    componentDidMount() {
        const { city } = this.state;


            fetch(makeApiUrl(city))
            .then(res => res.json())
            .then(json => {
                const newWeather = getWeatherFromApi(json);
                this.setState({ 
                    data: newWeather});
                }).catch( err => console.log(err));
    }
        
    render(){
        
        const { data } = this.state;
        const { city, onWeatherLocationClick } = this.props;
     
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/> 
                {
                   data ? <WeatherData data={ data }/> : <CircularProgress/>  
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;