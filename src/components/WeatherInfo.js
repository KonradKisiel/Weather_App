import React from 'react';

const WeatherInfo = (props) => {
    const { city, country, temperature, description, pressure, wind_deg, wind_speed, humidity, visibility, error } = props;
    const DisplayData =
        (city && country) ?
            (
                <div>
                    <h1>{city}</h1>
                    <h1>{temperature} °</h1>
                    <h2>{description}</h2>
                    <p>{pressure} hPa</p>
                    <p>{wind_deg} °, {wind_speed}m/s</p>
                    <p>Humidity: {humidity}%</p>
                    <p>Visibility: {visibility / 1000} km</p>
                </div>
            ) : (
                <p>{error}</p>
            )
    return (
        <div>
            {DisplayData}
        </div>
    )
}

export default WeatherInfo