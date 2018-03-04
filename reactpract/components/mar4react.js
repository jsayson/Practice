import React, { Component } from 'react';

class MultiForm extends Component{
	constructor(props){
		super(props);
		this.state = { goingTo : true, 
			numberOfGuests: 0
		};
		this.handleThisInputChange = this.handleThisInputChange.bind(this);
		this.handleThisInputAccept = this.handleThisInputAccept.bind(this);
	}
	handleThisInputChange(event){
		let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
		// let name = event.target.name;
		this.setState({
			[event.target.name]: value
		});
	}
	handleThisInputAccept(event){
		alert('The numbers of guest : '+this.state.numberOfGuests+' and '+(this.state.goingTo===true ? 'will' : 'wil not')+' go.');
		event.preventDefault();
	}
	render(){
		return (<form onSubmit={this.handleThisInputAccept} >
			<label>No. of Going:
			<input type='checkbox' name='goingTo' checked={this.state.goingTo} onChange={this.handleThisInputChange} />
			</label>
			<br />
			<label>
			Number of Guests:
			<input type='number' name='numberOfGuests' value={this.state.numberOfGuests} onChange={this.handleThisInputChange} />
			</label>
			<input type='submit' value='Submit' />
			</form>);
	}
}

export default MultiForm;
