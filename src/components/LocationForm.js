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

  locationForm = (locationOption, error) => {
    switch (locationOption) {
      case "cityR":
        return (
          <div className="centerContainer">
            <label htmlFor="city"><h3>City:</h3></label>
            <input type="text" name="city" /><br></br>
            <br></br>
            <label htmlFor="country"><h3>Country:</h3></label>
            <input type="text" name="country" /><br></br>
            <p>{error}</p>
          </div>
        )
      case "cityR":
      case "coordsR":
        return (
          <div className="centerContainer">
            <label htmlFor="lat"><h3>Latitude:</h3></label>
            <input type="text" name="lat" /><br></br>
            <br></br>
            <label htmlFor="lon"><h3>Longitude:</h3></label>
            <input type="text" name="lon" /><br></br>
            <p>{error}</p>
          </div>
        )
      case "zipR":
        return (
          <div className="centerContainer">
            <label htmlFor="zip"><h3>Zip:</h3></label>
            <input type="text" name="zip" /><br></br>
            <br></br>
            <label htmlFor="country"><h3>Country:</h3></label>
            <input type="text" name="country" /><br></br>
            <p>{error}</p>
          </div>
        )
    }
  }

  render() {
    const props = this.props;
    return (
      <div className="container360">
        <h1 className="header">Set location</h1>
        <form onSubmit={props.getWeather}>
          <div className="radios">
            <input type="radio" name="locRadios" id="autoR" value="autoR"
              checked={this.state.locationOption === 'autoR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="autoR">
              <span><span></span></span> Auto</label>
            <input type="radio" name="locRadios" id="cityR" value="cityR"
              checked={this.state.locationOption === 'cityR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="cityR">
              <span><span></span></span> City</label>
            <input type="radio" name="locRadios" id="coordsR" value="coordsR"
              checked={this.state.locationOption === 'coordsR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="coordsR">
              <span><span></span></span> Coordinates</label>
            <input type="radio" name="locRadios" id="zipR" value="zipR"
              checked={this.state.locationOption === 'zipR'}
              onChange={this.handleLocationChange}
            />
            <label htmlFor="zipR">
              <span><span></span></span> Zip</label>
          </div>
          {this.locationForm(this.state.locationOption, props.error)}
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
