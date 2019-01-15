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

import ClearSkyD from './assets/icons/01d.svg'
import ClearSkyN from './assets/icons/01n.svg'
import FewCloudsD from './assets/icons/02d.svg'
import FewCloudsN from './assets/icons/02n.svg'
import ScatteredClouds from './assets/icons/03d.svg'
import BrokenClouds from './assets/icons/04d.svg'
import ShowerRain from './assets/icons/09d.svg'
import Thunderstorm from './assets/icons/11d.svg'
import Snow from './assets/icons/13d.svg'
import Mist from './assets/icons/50d.svg'

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
  setIcon = (icon) => {
    switch (icon) {
      case "01d":
        return ClearSkyD;
      case "01n":
        return ClearSkyN;
      case "02d":
        return FewCloudsD;
      case "02n":
        return FewCloudsN;
      case "03d", "03n":
        return ScatteredClouds;
      case "04d", "04n":
        return BrokenClouds;
      case "09d", "09n":
        return ShowerRain;
      case "11d", "11n":
        return Thunderstorm;
      case "13d", "13n":
        return Snow;
      case "50d", "50n":
        return Mist;
      default:
        return null;
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
        icon: this.setIcon(data.weather[0].icon)
      }
      this.setState({ weather, weatherInfo, newLocation: false })
      console.log(this.state);
    }
    catch (err) {
      this.setState({
        weather: null,
        weatherInfo: null,
        error: "Please enter valid values"
      })
    }
  };

  newLocation = () => {
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
            weatherInfo={weatherInfo}
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
