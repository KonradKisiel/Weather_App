import React, { Component } from 'react';
import Form from './components/Form';
import WeatherInfo from './components/WeatherInfo';
import DefaultImg from './assets/img/simon-wilkes-345755-unsplash.jpg';
import ClearImg from './assets/img/ian-dooley-407846-unsplash.jpg';
import CloudsImg from './assets/img/lukasz-lada-275650-unsplash.jpg';
import RainImg from './assets/img/gabriele-diwald-201135-unsplash.jpg';
import DrizzleImg from './assets/img/christian-wiediger-672094-unsplash.jpg';
import MistImg from './assets/img/ricardo-gomez-angel-223577-unsplash.jpg';
import StormImg from './assets/img/layne-lawson-101816-unsplash.jpg';
import SnowImg from './assets/img/nathan-fertig-371188-unsplash.jpg';

//register to OpenWeatherMap and paste API key here
const API_KEY = "37ed176a584be416c6960e386d5d239c";
let units = "metric"; //imperial also available

class App extends Component {
  state = {
    weather: null,
    weatherInfo: null,
    error: "",
    newLocation: false,
  }
  setBackground = (weatherDescription) => {
    switch (weatherDescription) {
      case "Clear":
        return ClearImg;
      case "Clouds":
        return CloudsImg;
      case "Rain":
        return RainImg;
      case "Drizzle":
        return DrizzleImg;
      case "Mist":
        return MistImg;
      case "Thunderstorm":
        return StormImg;
      case "Snow":
        return SnowImg;
      default:
        return DefaultImg;
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=${units}`
      ).then(resp => resp.json());
      console.log(data);
      const weather = data.weather[0].main;
      const weatherInfo = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        wind_deg: data.wind.deg,
        wind_speed: data.wind.speed,
        humidity: data.main.humidity,
      }
      this.setState({ weather, weatherInfo, newLocation: false })
      console.log(this.state);
    }
    catch (err) {
      this.setState({
        weather: null,
        weatherInfo: null,
        error: "Please enter valid values."
      })
    }
  };

  newLocation = () => {
    console.log("click")
    this.setState({
      weather: null,
      weatherInfo: null,
      newLocation: true,
    })
  }

  render() {
    const {
      weather,
      weatherInfo,
      error,
      newLocation,
    } = this.state;
    return (
      <div>
        <img id="background" src={this.setBackground(weather)} alt="background" />
        {(weather && weatherInfo && !newLocation) ? (
          <WeatherInfo
            city={weatherInfo.city}
            country={weatherInfo.country}
            temperature={weatherInfo.temperature}
            description={weatherInfo.description}
            pressure={weatherInfo.pressure}
            wind_deg={weatherInfo.wind_deg}
            wind_speed={weatherInfo.wind_speed}
            humidity={weatherInfo.humidity}
            error={weatherInfo.error}
            newLocation={this.newLocation}
          />
        )
          :
          (
            <Form getWeather={this.getWeather} error={error} />
          )}
      </div>
    );
  }
}

export default App;
