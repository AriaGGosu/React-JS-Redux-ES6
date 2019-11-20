const location = "Santiago,cl";
const api_key = "1834d25a0157004db2648fb971a49e7f";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;

export default api_weather;