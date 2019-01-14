import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <h1 className="header">Set location</h1>
      <form onSubmit={props.getWeather}>
        <label htmlFor="city">City:</label>
        <input type="text" name="city" /><br></br>
        <br></br>
        <label htmlFor="city">Country:</label>
        <input type="text" name="country" /><br></br>
        <p>{props.error}</p>
        <br></br>
        <br></br>
        <br></br>
        <button>Get weather</button>
      </form>
    </div>
  )
}

export default Form;
