import React from "react";
import BoilingVerdicts from "./BoilingVerdicts";
import TemperatureInput from "./TemperatureInput";
import { convert, toCelcius, toFarhenheit } from "../lib/converter";

export default class Calculator extends React.Component {
  state = {
    temperature: "",
    scale: "c",
  };
  handleChange = (e, scale) => {
    this.setState({
      temperature: e.target.value,
      scale: scale,
    });
  };
  render() {
    const { temperature, scale } = this.state;
    const celcious =
      scale === "f" ? convert(temperature, toCelcius) : temperature;
    const fahrenheit =
      scale === "c" ? convert(temperature, toFarhenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celcious}
          onTemperatureChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange}
        />

        <BoilingVerdicts celcious={parseFloat(celcious)} />
      </div>
    );
  }
}
