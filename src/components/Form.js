import React from "react";

const Form = (props) => {
  return (
    <div className="container360">
      <h1 className="header">Set location</h1>
      <br></br>
      <br></br>
      <form onSubmit={props.getWeather}>
        <label htmlFor="city">City:</label>
        <input type="text" name="city" /><br></br>
        <br></br>
        <label htmlFor="city">Country:</label>
        <input type="text" name="country" /><br></br>
        <p>{props.error}</p>
        <button>Get weather</button>
      </form>
    </div>
  )
}

export default Form;
