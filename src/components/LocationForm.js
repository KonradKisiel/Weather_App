import React, { Component } from 'react';

class LocationForm extends Component {
  state = {
    locationOption: 'cityR',
    imperialUnits: false
  }

  handleLocationChange = e => {
    this.setState({
      locationOption: e.target.value
    });
  }

  handleUnitsChange = e => {
    this.setState({
      imperialUnits: e.target.checked
    });
  }

  render() {
    const props = this.props;
    return (
      <div className="container360">
        <h1 className="header">Set location</h1>
        <form onSubmit={props.getWeather}>
          <div className="radios">
            <input type="radio" name="mControls" id="cityR" value="cityR"
              checked={this.state.locationOption === 'cityR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="cityR">
              <span><span></span></span> City</label>
            <input type="radio" name="mControls" id="cordsR" value="cordsR"
              checked={this.state.locationOption === 'cordsR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="cordsR">
              <span><span></span></span> Coordinates</label>
            <input type="radio" name="mControls" id="zipR" value="zipR"
              checked={this.state.locationOption === 'zipR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="zipR">
              <span><span></span></span> Zip</label>
            <input type="radio" name="mControls" id="autoR" value="autoR"
              checked={this.state.locationOption === 'autoR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="autoR">
              <span><span></span></span> Auto</label>
          </div>
          <div className="centerContainer">
            <label htmlFor="city"><h3>City:</h3></label>
            <input type="text" name="city" /><br></br>
            <br></br>
            <label htmlFor="country"><h3>Country:</h3></label>
            <input type="text" name="country" /><br></br>
            <p>{props.error}</p>
          </div>
          <div className="toggle">
            <input type="checkbox" id="switch"
              checked={this.state.imperialUnits}
              onChange={this.handleUnitsChange}
            />
            <label htmlFor="switch">Toggle</label>
            <p><span>°C </span><span>°F</span></p>
          </div>
          <button>Get weather</button>
        </form>
      </div>
    )
  }
}

export default LocationForm;
