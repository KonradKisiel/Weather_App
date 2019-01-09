import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <label htmlFor="city">City:</label>
      <input type="text" name="city" /><br></br>
      <br></br>
      <label htmlFor="city">Country:</label>
      <input type="text" name="country" /><br></br>
      <br></br>
      <br></br>
      <button>Get Weather</button>
    </form>
  )
}

export default Form;
