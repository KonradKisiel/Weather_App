import React from "react";

const Form = (props) => {
  return (
    <div className="container360">
      <h1 className="header">Set location</h1>
      <form onSubmit={props.getWeather}>
        <div className="radios">
          <input type="radio" name="mControls" id="cityR" />
          <label htmlFor="cityR">
            <span><span></span></span> City</label>
          <input type="radio" name="mControls" id="cordsR" />
          <label htmlFor="cordsR">
            <span><span></span></span> Cordinates</label>
          <input type="radio" name="mControls" id="zipR" />
          <label htmlFor="zipR">
            <span><span></span></span> Zip</label>
          <input type="radio" name="mControls" id="autoR" />
          <label htmlFor="autoR">
            <span><span></span></span> Auto</label>
        </div>
        <br></br>
        <div className="centerContainer">
          <label htmlFor="city"><h3>City:</h3></label>
          <input type="text" name="city" /><br></br>
          <br></br>
          <label htmlFor="country"><h3>Country:</h3></label>
          <input type="text" name="country" /><br></br>
          <p>{props.error}</p>
          <br></br>
          <br></br>
          <div className="toggle">
            <input type="checkbox" id="switch" /><label htmlFor="switch">Toggle</label>
            <p><span>°C </span><span>°F</span></p>
          </div>
        </div>
        <button>Get weather</button>
      </form>
    </div>
  )
}

export default Form;
