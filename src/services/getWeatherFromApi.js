import { 
    CLOUD, 
    SUN, 
    RAIN, 
    SNOW,
    THUNDER,
    DRIZZLE
} from '../constants/weathers';

const convertIdToWeather = Id => {
    if (Id < 300){
        return THUNDER;
    }else if (Id < 400){
        return DRIZZLE;
    }else if (Id < 600){
        return RAIN;
    }else if (Id < 700){
        return SNOW;
    }else if(Id === 800){
        return SUN;
    }else {
        return CLOUD;
    }
}

const  getWeatherFromApi = apiData => {
    const { temp, humidity } = apiData.main;
    const { speed } = apiData.wind;

    const weatherState = convertIdToWeather(apiData.weather[0].id);
    console.log(apiData.weather[0])
    console.log(weatherState);
    const data = {
        temperature: temp.toFixed(0),
        weatherState,
        humidity,
        wind: `${speed} m/s`
    }

    return data;
}

export default getWeatherFromApi;