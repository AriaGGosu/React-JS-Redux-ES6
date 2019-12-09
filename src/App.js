import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
      <Grid fluid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Titulo
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className="weatherCont">
              {cities.map(( city , key) =>
                <WeatherLocation 
                  onWeatherLocationClick={ () => handleWeatherLocationClick(city) } 
                  city={city} 
                  key={key}
                />
              )}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="details"></div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
