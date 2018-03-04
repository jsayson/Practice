import React, { Component } from 'react';

class MultiForm extends Component{
	constructor(props){
		super(props);
		this.state = { goingTo : true, 
			numberOfGuests: 0
		};
		this.handleThisInputChange = this.handleThisInputChange.bind(this);
	}
	handleThisInputChange(event){
		let value = event.target.type === 'number' ? event.target.value : event.target.checked;
		// let name = event.target.name;
		this.setState({
			[event.target.name] : value
		});
	}
	render(){
		return (<form>
			<label>No. of Going:
			<input type='checkbox' name='goingTo' checked={this.state.goingTo} onChange={this.handleThisInputChange} />
			</label>
			<br />
			<label>
			Number of Guests:
			<input type='number' name='numberOfGuests' value={this.state.numberOfGuests} onChange={this.handleThisInputChange} />
			</label>
			</form>);
	}
}

export default MultiForm;
