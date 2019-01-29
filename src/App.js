import React, { Component } from 'react';
import LocationForm from './components/LocationForm';
import WeatherInfo from './components/WeatherInfo';
import ForecastCarousel from './components/ForecastCarousel';

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
import RainD from './assets/icons/10d.svg'
import RainN from './assets/icons/10n.svg'
import Thunderstorm from './assets/icons/11d.svg'
import Snow from './assets/icons/13d.svg'
import Mist from './assets/icons/50d.svg'
import Null from './assets/icons/null.svg'

class App extends Component {
  state = {
    weather: null,
    currentWeather: null,
    forecast: null,
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
      case "03d":
      case "03n":
        return ScatteredClouds;
      case "04d":
      case "04n":
        return BrokenClouds;
      case "09d":
      case "09n":
        return ShowerRain;
      case "10d":
        return RainD;
      case "10n":
        return RainN;
      case "11d":
      case "11n":
        return Thunderstorm;
      case "13d":
      case "13n":
        return Snow;
      case "50d":
      case "50n":
        return Mist;
      default:
        return Null;
    }
  }
  setLocation = (e, locationOption) => {
    switch (locationOption) {
      case "cityR":
        return `q=${e.target.elements.city.value},${e.target.elements.country.value}`;
      case "autoR":
      case "coordsR":
        return `lat=${e.target.elements.lat.value}&lon=${e.target.elements.lon.value}`;
      case "zipR":
        return `zip=${e.target.elements.zip.value},${e.target.elements.country.value}`;
    }
  }
  getWeather = async (e) => {
    e.preventDefault();
    //register to OpenWeatherMap and paste API key here
    const API_KEY = "37ed176a584be416c6960e386d5d239c";
    const locationOption = e.target.elements.locRadios.value;
    const location = this.setLocation(e, locationOption);
    const units = e.target.elements.switch.checked ? "imperial" : "metric";//imperial also available

    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${location}&appid=${API_KEY}&units=${units}`
      ).then(resp => resp.json());
      console.log(data);
      let currentData = new Date(Date.now());
      //to fix, currentWeather.weather doesn't work for background
      const weather = data.weather[0].main;
      const currentWeather = {
        city: data.name,
        coord: data.coord,
        date: currentData,//new Date(data.dt * 1000), //Date.now(),
        country: data.sys.country,
        units: units,
        temperature: data.main.temp,
        description: data.weather[0].description,
        pressure: data.main.pressure,
        wind_deg: data.wind.deg,
        wind_speed: data.wind.speed,
        humidity: data.main.humidity,
        icon: this.setIcon(data.weather[0].icon),
        cloudiness: data.clouds.all,
        sunrise: new Date(data.sys.sunrise * 1000),
        sunset: new Date(data.sys.sunset * 1000)
      }
      this.setState({ weather, currentWeather, newLocation: false })
    }
    catch (err) {
      this.setState({
        weather: null,
        currentWeather: null,
        error: "Please enter valid values" // '"' + err + '"'
      })
    }

    try {
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?${location}&appid=${API_KEY}&units=${units}`
      ).then(resp => resp.json());
      data = data.list;
      console.log(data);
      const forecastData = data.map((forecast) => {
        return {
          date: new Date(forecast.dt * 1000),
          icon: this.setIcon(forecast.weather[0].icon),
          units: units,
          temperature: Math.floor(forecast.main.temp),
          description: forecast.weather[0].main
          /* humidity: forecast.main.humidity */
        }
      })

      //slice data for arrays proper to window width
      let elements = Math.floor((window.innerWidth - 20) / 110);
      let slicedData = [];
      for (let i = 0; i < forecastData.length; i += elements) {
        slicedData.push(forecastData.slice(i, i + elements));
      }
      this.setState({
        forecast: slicedData
      })
    } catch (err) {
      console.log(err)
    }
  };

  newLocation = () => {
    this.setState({
      weather: null,
      currentWeather: null,
      forecast: null,
      newLocation: true,
    })
  }

  render() {
    const {
      weather,
      currentWeather,
      forecast,
      error,
      newLocation,
    } = this.state;
    return (
      <div>
        <img id="background" src={this.setBackground(weather)} alt="background" />
        <div className="mainContainer">
          {(weather && currentWeather && forecast && !newLocation) ? (
            <div>
              <WeatherInfo
                weatherInfo={currentWeather}
                forecast={forecast}
              />
              <ForecastCarousel forecast={forecast} />
              <button onClick={this.newLocation}>Change location</button>
            </div>
          )
            :
            (
              <LocationForm getWeather={this.getWeather} error={error} />
            )}
        </div>
      </div>
    );
  }
}

export default App;
