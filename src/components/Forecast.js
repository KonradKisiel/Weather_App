import React from 'react';

const Forecast = ({ forecast }) => {
    return (
        <div id="forecast">
            <div id="forecastWindow">
                {forecast.map(element => {
                    return (
                        <div className="forecastElement" key={element.date}>
                            <p>{element.date.toLocaleString('en-us', { weekday: 'short' })}</p>
                            <p>{element.date.getHours()}:00</p>
                            <img src={element.icon} alt="weather icon" />
                            <h2>{element.temperature}°c</h2>
                            <div>
                                <svg className="infoSvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(0,0,0,0)" stroke="#fff">
                                    <path d="M12 20a6 6 0 0 1-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 0 1-6 6z" />
                                </svg>
                                {element.humidity}%
                        </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Forecast