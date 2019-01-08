import React, { Component } from 'react';
import Form from './components/Form';
import WeatherInfo from './components/WeatherInfo';

//register to OpenWeatherMap and paste API key here
const API_KEY = "37ed176a584be416c6960e386d5d239c";
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
        wind_deg: data.wind.deg,
        wind_speed: data.wind.speed,
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
        wind_deg: undefined,
        wind_speed: undefined,
        humidity: undefined,
        visibility: undefined,
        error: "Please enter valid values."
      })
    }
  };
  render() {
    return (
      <div>
        <h1>Current weather</h1>
        <Form getWeather={this.getWeather} />
        <WeatherInfo
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          pressure={this.state.pressure}
          wind_deg={this.state.wind_deg}
          wind_speed={this.state.wind_speed}
          humidity={this.state.humidity}
          visibility={this.state.visibility}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
