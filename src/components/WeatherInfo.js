import React from 'react';

const WeatherInfo = (props) => {
    const { city, temperature, description, pressure, wind_deg, wind_speed, humidity, newLocation } = props;
    return (
        <div className="container">
            <h1 className="header">{city}</h1>
            <h1 id="tempBig">{Math.floor(temperature)}°</h1>
            <h2 className="capitalize">{description}</h2>
            <p>{pressure} hPa</p>
            <p>{wind_deg}°, {wind_speed} m/s</p>
            <p>Humidity: {humidity}%</p>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={newLocation}>Change location</button>
        </div>
    )
}

export default WeatherInfo