import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

import makeApiUrl from '../../constants/api_weather';
import getWeatherFromApi from '../../services/getWeatherFromApi';
import './style.css';

class WeatherLocation extends Component {
    constructor(props){
        const { city } = props;
        super(props);
        this.state = {
            city: city,
            data: null
        }
    }

    componentDidMount() {
        const { city } = this.state;
            fetch(makeApiUrl(city))
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const newWeather = getWeatherFromApi(json);
                this.setState({ 
                    data: newWeather});
                }).catch( err => console.log(err));
    }
        
    render(){
            
        const { data } = this.state;
        const { city } = this.props;
     
        return(
            <div>
                <Location city={city}/>
                {
                   data ? <WeatherData data={ data }/> : 
                   <div class="loadingio-spinner-bean-eater-42kk0sj589n">
                       <div class="ldio-9modohex3j">
                           <div>
                               <div></div>
                               <div></div>
                               <div></div>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                   </div>
                   
                }
            </div>
        );
    }
}

export default WeatherLocation;