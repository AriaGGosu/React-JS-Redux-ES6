import React from 'react';
import './App.css';
import WeatherLocation from "./components/WeatherLocation";
import { Grid, Row, Col} from "react-flexbox-grid";


function App() {

  const cities = ['Santiago,cl', 'Viña del mar,cl','Tokyo,jp','Osaka,jp','Yokohama,jp'];

  const handleWeatherLocationClick = city => {
    console.log(city)
  }
  return (
        <div className="App">
          <Grid>
            <Row>
              {cities.map(( city , key) => 
                <Col xs={12} sm={12} md={6} lg={6}>
                  <WeatherLocation 
                    onWeatherLocationClick={ () => handleWeatherLocationClick(city) } 
                    city={city} 
                    key={key}
                  />
                </Col>
                )}
            </Row>
          </Grid>
        </div>
  );
}

export default App;
