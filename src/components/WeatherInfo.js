import React from 'react';
import BarometerSvg from '../assets/icons/gauge.svg';
import WindSvg from '../assets/icons/navigation24.svg';
import HumiditySvg from '../assets/icons/water.svg';

const WeatherInfo = (props) => {
    const { city, temperature, description, pressure, wind_deg, wind_speed, humidity, icon } = props.weatherInfo;
    return (
        <div className="container">
            <h1 className="header">{city}</h1>
            <h1 id="tempBig">{Math.floor(temperature)}<img className="weatherIcon" src={icon} alt="weather icon" /><span id="tempUnit">C</span></h1>
            <h2 className="capitalize">{description}</h2>
            <div id="infoBar">
                <div><img src={BarometerSvg} alt="barometer" /> {pressure} hPa</div>
                <div><img src={WindSvg} alt="wind direction" />{/*{wind_deg}°*/} {wind_speed} m/s</div>
                <div><img src={HumiditySvg} alt="wind direction" /> {humidity}%</div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={props.newLocation}>Change location</button>
        </div>
    )
}

export default WeatherInfo