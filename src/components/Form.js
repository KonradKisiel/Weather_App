import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="City..." /><br></br>
      <br></br>
      <input type="text" name="country" placeholder="Country..." /><br></br>
      <br></br>
      <button>Get Weather</button>
    </form>
  )
}

export default Form;
