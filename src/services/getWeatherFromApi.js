import {  
    CLOUDY
} from '../constants/weathers';

const  getWeatherFromApi = apiData => {
    const { temp, humidity } = apiData.main;
    const { speed } = apiData.wind;
    const weatherState = CLOUDY;

    const data = {
        temperature: temp,
        weatherState,
        humidity,
        wind: `${speed} m/s`
    }

    return data;
}

export default getWeatherFromApi;