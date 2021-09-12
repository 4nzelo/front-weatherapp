import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//8hook que almacena cities.
//9-11funciòn que pide por los cities
function App() {
  //const [cities, setCities] = useState();
  const [humidity, setHumidity] = useState();
  const [temp, setTemp] = useState();
  const [speedWind, setSpeedWind] = useState();

  const url = 'http://localhost:4000/api/cities/byCode/200';
  const fetchApi = async () => {

    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    //humidity = responseJSON['main']['humidity'];
    setHumidity(responseJSON['main']['humidity']);
    setTemp(responseJSON['main']['temp']);
    setSpeedWind(responseJSON['wind']['speed']);
    //setCities(responseJSON);
    console.log(responseJSON);
  
    
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <WeatherCard humidity = { `${humidity}` } temp = { `${temp}` } speedWind = { `${speedWind}` }/>
      
    </div>
  );
}

export default App;
