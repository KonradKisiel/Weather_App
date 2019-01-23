import React, { Component } from 'react';
import "./Carousel/carousel.css";
import Carousel from './Carousel/Carousel';

class ForecastCarousel extends Component {
    render() {
        const forecast = this.props.forecast;
        return (
            <Carousel forecast={forecast} emulateTouch={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} useKeyboardArrows={true}>
                {forecast.map(subarray => {
                    return (
                        <div className="forecastCarousel">
                            {subarray.map(element => {
                                return (
                                    <div className="forecastElement" key={element.date}>
                                        <p>{element.date.toLocaleString('en-us', { weekday: 'short' })}</p>
                                        <p>{element.date.getHours()}:00</p>
                                        <img src={element.icon} alt="weather icon" />
                                        <h2>{element.temperature}°c</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={'#ffffff' + (Math.floor(element.humidity * 2.55)).toString(16)} stroke="#fff">
                                            <path d="M12 20a6 6 0 0 1-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 0 1-6 6z" />
                                        </svg>
                                        {element.humidity}%
                            </div>
                                )
                            })}
                        </div>
                    )
                })}
            </Carousel>
        );
    }
};

export default ForecastCarousel