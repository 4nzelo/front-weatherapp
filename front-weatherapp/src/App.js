import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//8hook que almacena var.
//9-11funciòn que pide por las var.
function App() {
  const [humidity, setHumidity] = useState();
  const [temp, setTemp] = useState();
  const [speedWind, setSpeedWind] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  

  const url = 'http://localhost:4000/api/cities/byCode/200';
  const fetchApi = async () => {

    const response = await fetch(url);
    console.log(response.status);
    const responseJSON = await response.json();
    setHumidity(responseJSON['main']['humidity']);
    setTemp(responseJSON['main']['temp']);
    setSpeedWind(responseJSON['wind']['speed']);
    setName(responseJSON['name']);
    setDate(responseJSON['date']);
    console.log(responseJSON);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      <WeatherCard 
      humidity = { `${humidity}` } 
      temp = { `${temp}` } 
      speedWind = { `${speedWind}` }
      name = { `${name}` }
      date = { `${date}` }      
      />
    </div>
  );
}

export default App;
