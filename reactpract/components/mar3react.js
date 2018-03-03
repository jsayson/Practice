import React, { Component } from 'react';

class MyForm extends Component{
	constructor(props){
		super(props);
		this.state = { value: '' };
		this.handleThisChange = this.handleThisChange.bind(this);
		this.handleThisSubmit = this.handleThisSubmit.bind(this);
	}

	handleThisChange(event){
		this.setState({value: event.target.value });
		}

	handleThisSubmit(event){
		alert('Inserted new value '+ this.state.value);
		//preventDefault is used to prevent the default action of the button, by adding preventDefault it prevents this from happening
		event.preventDefault();
	}

	render(){
		return (
			<form onSubmit={this.handleThisSubmit}>
			<label>Name: <input type='text' value={this.state.value} onChange={this.handleThisChange} />
			</label>
			<input type='submit' value='Submit' />
			</form>);
	}
}

class Forms extends Component{
render(){
	return (<MyForm />);
	}
}

export default Forms;
