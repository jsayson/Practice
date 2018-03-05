import React, { Component } from 'react';

function Temp(props){
	console.log(props);
	if(props.deg >= 35){
		return <h1>The Weather is hot</h1>;
	}
	return <h1>Such a nice Weather</h1>;
}

// const temp = { location: 'Philippines',
// 	temperature: 30	
// }

class CalculateTemp extends Component{
	constructor(props){
		super(props);
		this.state = {
			temperature: ''
		}
		this.handleThisChange = this.handleThisChange.bind(this);
	}
	handleThisChange(e){
		this.setState({temperature: e.target.value});
	}
	render(){
		const temp = this.state.temperature;
		return (<fieldset>
			<legend>Enter temperature in Celius: </legend>
			<input value={temp} onChange={this.handleThisChange} />
			<Temp deg={parseFloat(temp)} />
			</fieldset>
			);
	}
}

class LiftingState extends Component{
	render(){
		return (<CalculateTemp />)
	}
}

export default LiftingState;
