import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherLocation from "./components/WeatherLocation";

function App() {
  return (
    <div className="App">
      weather app (aplicacion del clima)
      <WeatherLocation/>    
    </div>
  );
}

export default App;
