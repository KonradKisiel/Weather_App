import React from 'react';

const WeatherInfo = (props) => {
    const { city,
        date,
        temperature,
        description,
        pressure,
        wind_deg,
        wind_speed,
        humidity,
        icon,
        cloudiness,
        sunrise,
        sunset } = props.weatherInfo;
    const windRotation = 'rotate(' + wind_deg + ')';
    const pressureRotation = 'rotate(' + (pressure - 1000) * 2 + ')';
    const humidityOpacity = '#ffffff' + (Math.floor(humidity * 2.55)).toString(16);
    const cloudinessOpacity = '#ffffff' + (Math.floor(humidity * 2.55)).toString(16);
    console.log(humidityOpacity);
    return (
        <div className="container360">
            <p>{date.toDateString()}</p>
            <h1 className="header">{city}</h1>
            <div className="infoBar">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" width="24" height="24">
                        <path d="M3 12h4a5 5 0 0 1 5-5 5 5 0 0 1 5 5h4a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 1 1 0 0 1 1-1m12 0a3 3 0 0 0-3-3 3 3 0 0 0-3 3h6M12 2l2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m17.31 0l-1.77 3.79a7.023 7.023 0 0 0-2.38-4.15l4.15.36m-7.94 9.3l3.11 3.11a.996.996 0 1 1-1.41 1.41L12 18.41l-2.41 2.41a.996.996 0 1 1-1.41-1.41l3.11-3.11c.21-.2.45-.3.71-.3.26 0 .5.1.71.3z" />
                    </svg>
                    {sunrise.getHours()}:{sunrise.getMinutes() < 10 ? "0" : ""}{sunrise.getMinutes()}
                </div>
                <div>
                    {date.getHours()}:{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()}
                </div>
                {/*
                <div id="sunPosition">
                </div>
                */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="24" height="24">
                        <path d="M3 12h4a5 5 0 0 1 5-5 5 5 0 0 1 5 5h4a1 1 0 0 1 1 1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 1 1 0 0 1 1-1m12 0a3 3 0 0 0-3-3 3 3 0 0 0-3 3h6M12 2l2.39 3.42C13.65 5.15 12.84 5 12 5c-.84 0-1.65.15-2.39.42L12 2M3.34 7l4.16-.35A7.2 7.2 0 0 0 5.94 8.5c-.44.74-.69 1.5-.83 2.29L3.34 7m17.31 0l-1.77 3.79a7.023 7.023 0 0 0-2.38-4.15l4.15.36m-7.94 13.71l3.11-3.11c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0L12 18.59l-2.41-2.41a.996.996 0 0 0-1.41 0c-.39.39-.39 1.03 0 1.42l3.11 3.11c.21.19.45.29.71.29.26 0 .5-.1.71-.29z" />
                    </svg>
                    {sunset.getHours()}:{sunset.getMinutes() < 10 ? "0" : ""}{sunset.getMinutes() + " "}
                </div>
            </div>
            <h1 id="tempBig">{Math.floor(temperature)}<img className="weatherIcon" src={icon} alt="weather icon" /><span id="tempUnit">C</span></h1>
            <h2 id="weatherDescription">{description}</h2>
            <div className="infoBar">
                <div>
                    {/*
                                        <svg transform={pressureRotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff">
                        <ellipse fill="none" cx="12" cy="12" stroke-width="1.8" rx="10.704" ry="10.75" />
                        <path fill="#fff" d="M12.027.524l-2.58 9.217A3.412 3.412 0 0 0 8.588 12 3.412 3.412 0 0 0 12 15.412 3.412 3.412 0 0 0 15.412 12a3.412 3.412 0 0 0-.87-2.268z" />
                    </svg>
                     */}
                    <svg transform={pressureRotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff">
                        <ellipse cx="12" cy="12" fill="none" stroke="#fff" stroke-width="1.8" rx="10.704" ry="10.75" />
                        <path fill="#fff" d="M12.022 2.294l-1.403 6.83a3.16 3.16 0 0 0-1.773 2.837 3.16 3.16 0 0 0 3.16 3.16 3.16 3.16 0 0 0 3.161-3.16 3.16 3.16 0 0 0-1.775-2.836z" />
                    </svg>
                    {pressure}hPa
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={humidityOpacity} stroke="#fff" stroke-width="1.8">
                        <path d="M12 20a6 6 0 0 1-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 0 1-6 6z" />
                    </svg>
                    {humidity}%
                </div>
                <div>
                    <svg transform={windRotation} xmlns="http://www.w3.org/2000/svg" stroke="#fff" fill="none" stroke-width="0.9" width="24" height="24">
                        <path d="M12.112.214a.428.428 0 0 0-.417.282l-8.111 22.5a.449.449 0 0 0 .152.506c.155.12.368.125.524.015l8.043-5.687 7.43 5.86a.443.443 0 0 0 .583-.029.435.435 0 0 0 .1-.452L12.528.52a.455.455 0 0 0-.415-.305zm6.983 21.862l-6.517-5.14a.443.443 0 0 0-.53-.019l-7.15 5.055 7.208-19.995z" />
                    </svg>
                    {/* 
                    <svg transform={windRotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff" fill="none" stroke-width="1.8">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                    </svg>
                    */}
                    {wind_speed}m/s
                </div>
                {/*
                              <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke-width="1.8" stroke="#fff" fill={cloudinessOpacity}>
                        <path d="M18.89 10.153A7.023 7.023 0 0 0 12 4.5a7.036 7.036 0 0 0-6.234 3.778A5.629 5.629 0 0 0 .75 13.875 5.625 5.625 0 0 0 6.375 19.5h12.188a4.688 4.688 0 0 0 4.687-4.688c0-2.474-1.922-4.48-4.36-4.659z" />
                    </svg>
                    {cloudiness}%
                </div>
                 */}
            </div>
            {/*
                        <br></br>
            <br></br>
            <br></br>
            <button onClick={props.newLocation}>Change location</button>
             
            <Forecast forecast={props.forecast} />
             */}
        </div>
    )
}

export default WeatherInfo