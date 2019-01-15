import React, { Component } from 'react';

const WeatherInfo = (props) => {
    const { city, temperature, description, pressure, wind_deg, wind_speed, humidity, icon } = props.weatherInfo;
    return (
        <div className="container">
            <h1 className="header">{city}</h1>
            <h1 id="temperatureBig">{Math.floor(temperature)}°</h1>
            <h2 className="capitalize">{description}</h2>
            <img src={icon} alt="weather icon" />
            <p>{pressure} hPa</p>
            <p>{wind_deg}°, {wind_speed} m/s</p>
            <p>Humidity: {humidity}%</p>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={props.newLocation}>Change location</button>
        </div>
    )
}

export default WeatherInfo