import React, { Component } from 'react';
import Form from './components/Form';

//register to OpenWeatherMap and paste API key here
const API_KEY = "";
let units = "metric"; //imperial also available

class App extends Component {
  state = {}
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=${units}`
      ).then(resp => resp.json());
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        wind: data.wind,
        humidity: data.main.humidity,
        visibility: data.visibility,
        error: ""
      })
      console.log(this.state);
    }
    catch (err) {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        pressure: undefined,
        wind: undefined,
        humidity: undefined,
        visibility: undefined,
        error: "Please enter valid values."
      })
    }
  };
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <Form getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;
