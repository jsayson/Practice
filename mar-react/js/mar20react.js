import * as React from 'react';
import { Component } from 'react';


//uncontrolled is like the traditional HTML fform inputs
//example
// class MyComponent extends Component{
// 	// constructor(props){
// 	// 	super(props);
// 	// 	this.myInputs = this.myInputs.bind(this);
// 	// }
// 	myInputs = (e) => {
// 		this.thisInput.focus();
// 		e.preventDefault();
// 		console.log(this.thisInput.value);
// 		this.thisInput.value = '';
// 	}
// 	render(){
// 		return (<div>
// 			<form onSubmit={this.myInputs} >
// 			<label>Input: 
// 			<input type='text' ref={(input)=>{this.thisInput = input}} onChange={this.myInputs} />
// 			</label>
// 			<input type='submit' value='submit' onClick={this.myInputs}/>
// 			</form>
// 			</div>);
// 	}
// }

// Controlled Components

//accept its value as a prop

class MyComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: ''
		}
	}
	handleInput = (e) => {
		console.log(this.state['name']);
		this.setState({name: e.target.value });
	}
	render(){
		return (<div>
			<input type='text' value={this.state['name']} onChange={this.handleInput} />
			</div>);
	}
}

export default MyComponent;
