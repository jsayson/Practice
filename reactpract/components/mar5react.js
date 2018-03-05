import React, { Component } from 'react';

function Temp(props){
	console.log(props);
	if(props.fahrenheit >= 95 || props.celsius >= 35){
		return <h1>The Weather is hot</h1>;
	}
	return <h1>Such a nice Weather</h1>;
}

// const temp = { location: 'Philippines',
// 	temperature: 30	
// }
const scaleTypes = {
	c: 'Celsius',
	f: 'Farenheit'
}

class CalculateTemp extends Component{
	constructor(props){
		super(props);
		this.state = {
			temperature: ''
		}
		this.handleThisChange = this.handleThisChange.bind(this);
	}
	handleThisChange(e){
		//theres no meaning to onTemperatureChange we could put any name to it.	
		this.props.onTemperatureChange(e.target.value);
	}
	render(){
		const temp = this.props.temperature;
		console.log(temp);
		//const temp = this.state.temperature;
		const scale = this.props.scaleTypes;

		return (<fieldset>
			<legend>Enter temperature in {scaleTypes[scale]}:</legend>
			<input value={temp} onChange={this.handleThisChange} />
			</fieldset>
			);
	}
}

class Calculator extends Component{
	constructor(props){
		super(props);
		this.state = {temperature: '', scale: ''};
	this.handleThisCelsiusChange = this.handleThisCelsiusChange.bind(this);
	this.handleThisFahrenheitChange = this.handleThisFahrenheitChange.bind(this);
	}
  	handleThisCelsiusChange(temperature) {
    	this.setState({scale: 'c', temperature});
  	}
  	handleThisFahrenheitChange(temperature) {
    	this.setState({scale: 'f', temperature});
  	}
	render(){
		const scale = this.state.scale;
		const temp = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp;
    	const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp;
		return (
      			<div>
        			<CalculateTemp scale="c" temperature={celsius} onTemperatureChange={this.handleThisCelsiusChange} />
        			<CalculateTemp scale="f" temperature={fahrenheit} onTemperatureChange={this.handleThisFahrenheitChange} />
        			<Temp celsius={parseFloat(celsius)}  fahrenheit={parseFloat(fahrenheit)}/>
      			</div>
    );
	}
}

class LiftingState extends Component{
	render(){
		return (<Calculator />)
	}
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


export default LiftingState;
