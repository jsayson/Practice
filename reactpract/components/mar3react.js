import React, { Component } from 'react';

// class MyForm extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = { value: '' };
// 		this.handleThisChange = this.handleThisChange.bind(this);
// 		this.handleThisSubmit = this.handleThisSubmit.bind(this);
// 	}

// 	handleThisChange(event){
// 		this.setState({value: event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1) });
// 		}

// 	handleThisSubmit(event){
// 		alert('Inserted new value '+ this.state.value.charAt(0).toUpperCase() + this.state.value.slice(1));
// 		//preventDefault is used to prevent the default action of the button, by adding preventDefault it prevents this from happening
// 		event.preventDefault();
// 	}

// 	render(){
// 		return (
// 			<form onSubmit={this.handleThisSubmit}>
// 			<label>Name: <input type='text' value={this.state.value} onChange={this.handleThisChange} />
// 			</label>
// 			<input type='submit' value='Submit' />
// 			<p>{this.state.value}</p>
// 			</form>);
// 	}
// }

class MyForm extends Component{
	constructor(props){
		super(props);
		this.state = { value: ''};
		this.handleThisChange = this.handleThisChange.bind(this);
		this.handleThisSubmit = this.handleThisSubmit.bind(this);
	}
	handleThisChange(event){
		this.setState({value: event.target.value.charAt(0).toUpperCase()+event.target.value.slice(1)});
	}
	handleThisSubmit(event){
		alert('Inserted New Record: '+this.state.value.charAt(0).toUpperCase()+this.state.value.slice(1));
		event.preventDefault();
	}
	render(){
		return (<form onSubmit={this.handleThisSubmit}>
			<textarea value={this.state.value} onChange={this.handleThisChange} />
			<input type='submit' value='Submit' />
			<p>{this.state.value}</p>
			</form>);
	}
}

class Forms extends Component{
render(){
	return (<MyForm />);
	}
}

export default Forms;
