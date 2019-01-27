import React from 'react';
const SunCalc = require('./Suncalc/suncalc');

const WeatherInfo = (props) => {
    const { city,
        date,
        coord,
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

    const sunRotation = (date - sunrise) / (sunset - sunrise) * 180 - 90;

    let moonData = SunCalc.getMoonTimes(date, coord.lat, coord.lon);
    if (moonData.set < date) {
        const d = new Date();
        d.setHours(24, 0, 0, 0);
        moonData = SunCalc.getMoonTimes(d, coord.lat, coord.lon);
    }
    if (moonData.rise > moonData.set) {
        const d = new Date();
        d.setHours(24, 0, 0, 0);
        moonData.set = SunCalc.getMoonTimes(d, coord.lat, coord.lon).set;
    }
    if (!moonData.rise) {
        const d = new Date();
        d.setHours(-24, 0, 0, 0)
        moonData.rise = SunCalc.getMoonTimes(d, coord.lat, coord.lon).rise;
    }
    const moonRotation = (date - moonData.rise) / (moonData.set - moonData.rise) * 180 - 90;

    console.log("moon data:")
    console.log(moonData)

    const windRotation = 'rotate(' + wind_deg + ')';
    const pressureRotation = 'rotate(' + (pressure - 1000) * 2 + ')';
    const humidityOpacity = '#ffffff' + (Math.floor(humidity * 2.55)).toString(16);
    const cloudinessOpacity = '#ffffff' + (Math.floor(humidity * 2.55)).toString(16);
    //document.getelementById(sunBar).style.width 
    const sunPsn = {
        transform: 'rotate(' + sunRotation + 'deg)',
        display: (sunRotation > 90) || (sunRotation < -90) ? 'none' : 'visible'
    };

    const moonPsn = {
        transform: 'rotate(' + moonRotation + 'deg)',
        display: (moonRotation > 90) || (moonRotation < -90) ? 'none' : 'visible'
    };
    console.log(moonPsn);

    return (
        <div className="container360">
            <p>{date.toDateString()}, {date.getHours()}:{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()}</p>
            <h1 className="header">{city}</h1>
            {/* 
             <div id="sunBar">
                <div id="sunPosition" style={sunPsn}>
                    {date.getHours()}:{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes()}<br></br>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" stroke="#fff">
                        <path stroke-width=".469" d="M22.326 12.938H20.45a.939.939 0 1 1 0-1.877h1.876a.939.939 0 0 1 0 1.877zM18.64 6.69a.939.939 0 1 1-1.328-1.328l1.328-1.328a.939.939 0 1 1 1.327 1.328zM12 17.632a5.633 5.633 0 1 1 0-11.266 5.633 5.633 0 0 1 0 11.266zm0-9.387a3.755 3.755 0 1 0 0 7.51 3.755 3.755 0 0 0 0-7.51zm0-3.755a.939.939 0 0 1-.938-.94V1.675a.939.939 0 0 1 1.877 0V3.55A.94.94 0 0 1 12 4.49zm-6.638 2.2L4.034 5.362a.939.939 0 1 1 1.328-1.328L6.69 5.362A.939.939 0 1 1 5.362 6.69zM4.49 12c0 .518-.42.938-.94.938H1.674a.938.938 0 0 1 0-1.877h1.878c.519 0 .939.42.939.939zm.872 5.31a.94.94 0 0 1 1.328 1.328l-1.328 1.328a.939.939 0 1 1-1.328-1.328zM12 19.51c.519 0 .94.42.94.939v1.877a.94.94 0 0 1-1.878 0V20.45c0-.519.42-.939.938-.939zm6.639-2.2l1.327 1.328a.939.939 0 1 1-1.328 1.328l-1.327-1.328a.939.939 0 1 1 1.328-1.328z" />
                    </svg>
                </div>
            </div>
            <div className="infoBar">
                <div className="leftAlign">
                    {sunrise.getHours()}:{sunrise.getMinutes() < 10 ? "0" : ""}{sunrise.getMinutes()}
                </div>
                <div>
                     {date.getHours()}:{date.getMinutes() < 10 ? "0" : ""}{date.getMinutes() + " "}
                </div>
                <div className="rightAlign">
                    {sunset.getHours()}:{sunset.getMinutes() < 10 ? "0" : ""}{sunset.getMinutes() + " "}
                </div>
            </div>
            */}


            <svg className="sunMoonPsn" style={moonPsn} xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2" d="M12.997 4.762A7.238 7.238 0 0 0 5.76 12a7.238 7.238 0 0 0 7.238 7.238 7.238 7.238 0 0 0 3.859-1.117A6.193 6.193 0 0 1 11.553 12a6.193 6.193 0 0 1 5.292-6.121 7.238 7.238 0 0 0-3.848-1.117z" />
            </svg>

            <svg className="sunMoonPsn" style={sunPsn} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" stroke="#fff">
                <path stroke-width=".469" d="M22.326 12.938H20.45a.939.939 0 1 1 0-1.877h1.876a.939.939 0 0 1 0 1.877zM18.64 6.69a.939.939 0 1 1-1.328-1.328l1.328-1.328a.939.939 0 1 1 1.327 1.328zM12 17.632a5.633 5.633 0 1 1 0-11.266 5.633 5.633 0 0 1 0 11.266zm0-9.387a3.755 3.755 0 1 0 0 7.51 3.755 3.755 0 0 0 0-7.51zm0-3.755a.939.939 0 0 1-.938-.94V1.675a.939.939 0 0 1 1.877 0V3.55A.94.94 0 0 1 12 4.49zm-6.638 2.2L4.034 5.362a.939.939 0 1 1 1.328-1.328L6.69 5.362A.939.939 0 1 1 5.362 6.69zM4.49 12c0 .518-.42.938-.94.938H1.674a.938.938 0 0 1 0-1.877h1.878c.519 0 .939.42.939.939zm.872 5.31a.94.94 0 0 1 1.328 1.328l-1.328 1.328a.939.939 0 1 1-1.328-1.328zM12 19.51c.519 0 .94.42.94.939v1.877a.94.94 0 0 1-1.878 0V20.45c0-.519.42-.939.938-.939zm6.639-2.2l1.327 1.328a.939.939 0 1 1-1.328 1.328l-1.327-1.328a.939.939 0 1 1 1.328-1.328z" />
            </svg>
            <div id="mainTemp">
                <h1 id="tempBig">{Math.floor(temperature)}<img className="weatherIcon" src={icon} alt="weather icon" /><span id="tempUnit">C</span></h1>
            </div>
            <div id="riseSet">
                <span className="leftAlign">
                    {sunrise.getHours()}:{sunrise.getMinutes() < 10 ? "0" : ""}{sunrise.getMinutes()}
                </span>
                <span className="rightAlign">
                    {sunset.getHours()}:{sunset.getMinutes() < 10 ? "0" : ""}{sunset.getMinutes() + " "}
                </span>
                <br></br>
                <span className="leftAlign">
                    {moonData.rise.getHours()}:{moonData.rise.getMinutes() < 10 ? "0" : ""}{moonData.rise.getMinutes()}
                </span>
                <span className="rightAlign">
                    {moonData.set.getHours()}:{moonData.set.getMinutes() < 10 ? "0" : ""}{moonData.set.getMinutes() + " "}
                </span>
            </div>
            <h2 id="weatherDescription">{description}</h2>
            <div className="infoBar">
                <div>
                    {/*
                                        <svg transform={pressureRotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff">
                        <ellipse fill="none" cx="12" cy="12" stroke-width="1.8" rx="10.704" ry="10.75" />
                        <path fill="#fff" d="M12.027.524l-2.58 9.217A3.412 3.412 0 0 0 8.588 12 3.412 3.412 0 0 0 12 15.412 3.412 3.412 0 0 0 15.412 12a3.412 3.412 0 0 0-.87-2.268z" />
                    </svg>
                     */}
                    <p>
                        <svg transform={pressureRotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff">
                            <ellipse cx="12" cy="12" fill="none" stroke="#fff" stroke-width="1.8" rx="10.704" ry="10.75" />
                            <path fill="#fff" d="M12.022 2.294l-1.403 6.83a3.16 3.16 0 0 0-1.773 2.837 3.16 3.16 0 0 0 3.16 3.16 3.16 3.16 0 0 0 3.161-3.16 3.16 3.16 0 0 0-1.775-2.836z" />
                        </svg>
                        {pressure}<span> hPa</span>
                    </p>
                </div>
                <div>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={humidityOpacity} stroke="#fff" stroke-width="1.8">
                            <path d="M12 20a6 6 0 0 1-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 0 1-6 6z" />
                        </svg>
                        {humidity}<span> %</span>
                    </p>
                </div>
                <div>
                    <p>
                        <svg transform={windRotation} xmlns="http://www.w3.org/2000/svg" stroke="#fff" fill="none" stroke-width="0.9" width="24" height="24">
                            <path d="M12.112.214a.428.428 0 0 0-.417.282l-8.111 22.5a.449.449 0 0 0 .152.506c.155.12.368.125.524.015l8.043-5.687 7.43 5.86a.443.443 0 0 0 .583-.029.435.435 0 0 0 .1-.452L12.528.52a.455.455 0 0 0-.415-.305zm6.983 21.862l-6.517-5.14a.443.443 0 0 0-.53-.019l-7.15 5.055 7.208-19.995z" />
                        </svg>
                        {/* 
                    <svg transform={windRotation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="#fff" fill="none" stroke-width="1.8">
                        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
                    </svg>
                    */}
                        {wind_speed}<span> m/s</span>
                    </p>
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
        </div>
    )
}

export default WeatherInfo