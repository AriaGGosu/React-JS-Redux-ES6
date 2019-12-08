import React from 'react';
import './App.css';
import WeatherLocation from "./components/WeatherLocation";


function App() {

  const cities = ['Santiago,cl', 'Viña del mar,cl','Tokyo,jp','Osaka,jp','Yokohama,jp'];

  const handleWeatherLocationClick = city => {
    console.log(city)
  }
  return (
        <div className="App">
          {cities.map(( city , key) => 
            <WeatherLocation 
            onWeatherLocationClick={ () => handleWeatherLocationClick(city) } 
            city={city} 
            key={key}
            />
            )}
        </div>
  );
}

export default App;
