const makeApiUrl = city => {
    const api_key = "1834d25a0157004db2648fb971a49e7f";
    const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
    const api_weather = `${url_base_weather}?q=${city}&appid=${api_key}&units=metric`;

    console.log(api_weather)
    return api_weather;
}

export default makeApiUrl;