import React from 'react';

const WeatherInfo = (props) => {
    const { city, date, temperature, description, pressure, wind_deg, wind_speed, humidity, icon } = props.weatherInfo;
    const rotation = 'rotate(' + wind_deg + ')';
    return (
        <div className="container">
            <h1 className="header">{city}</h1>
            <p>{date.toDateString()}  {date.getHours()}:{date.getMinutes()}</p>
            <h1 id="tempBig">{Math.floor(temperature)}<img className="weatherIcon" src={icon} alt="weather icon" /><span id="tempUnit">C</span></h1>
            <h2 className="capitalize">{description}</h2>
            <div id="infoBar">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff">
                        <path d="M12 16a3 3 0 0 1-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 0 0-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41-.39.39-1.03.39-1.42.01A9.969 9.969 0 0 1 2 13 10 10 0 0 1 12 3m10 10c0 2.76-1.12 5.26-2.93 7.07-.39.38-1.02.38-1.41-.01a.996.996 0 0 1 0-1.41A7.95 7.95 0 0 0 20 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13z" />
                    </svg>
                    {pressure}hPa
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0)" stroke="#fff">
                        <path d="M12 20a6 6 0 0 1-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 0 1-6 6z" />
                    </svg>
                    {humidity}%
                </div>
                <div><svg transform={rotation} xmlns="http://www.w3.org/2000/svg" stroke="#fff" fill="#fff" width="24" height="24">
                    <g>
                        <path d="M12.112.214a.428.428 0 0 0-.417.282l-8.111 22.5a.449.449 0 0 0 .152.506c.155.12.368.125.524.015l8.043-5.687 7.43 5.86a.443.443 0 0 0 .583-.029.435.435 0 0 0 .1-.452L12.528.52a.455.455 0 0 0-.415-.305zm6.983 21.862l-6.517-5.14a.443.443 0 0 0-.53-.019l-7.15 5.055 7.208-19.995z" />
                    </g>
                </svg> {wind_speed}m/s
                </div>
            </div>
            {/*
                        <br></br>
            <br></br>
            <br></br>
            <button onClick={props.newLocation}>Change location</button>
             */}
        </div>
    )
}

export default WeatherInfo