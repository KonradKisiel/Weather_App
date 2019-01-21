import React, { Component } from 'react';
import "./carousel.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel emulateTouch={true} showArrows={false} showThumbs={false} showStatus={false} useKeyboardArrows={true}>
                <div>
                    <div className="dummyDiv"></div>
                    <div className="dummyDiv"></div>
                    <div className="dummyDiv"></div>
                </div>
                <div>
                    <div className="dummyDiv"></div>
                    <div className="dummyDiv"></div>
                    <div className="dummyDiv"></div>
                </div>
                <div>
                    <div className="dummyDiv"></div>
                    <div className="dummyDiv"></div>
                    <div className="dummyDiv"></div>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel