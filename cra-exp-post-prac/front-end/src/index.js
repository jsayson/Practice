import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e){
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
	}
	handleSubmit(event){
		event.preventDefault();
		fetch('/submitted', {
			method: 'POST',
			body: JSON.stringify({
		      title: this.state.title
		    }),
		    headers: {"Content-Type": "application/json"}
		  })
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit} name='form'>
			<input type='text' name='title' placeholder='Title' onChange={this.handleChange}/>
			<input type='button' value='submit' />
			</form>
			);
	}
}

// class App extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			items: ''
// 		}
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}
// 	handleSubmit(e){
// 		e.preventDefault();
// 		let data = new FormData(e.target)
// 		fetch('/submitted', {
// 			method: 'post',
// 			body: JSON.stringify(data),
// 			headers: {"Content-Type": "application/json"}
// 		});
// 	}
// 	render(){
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 			<input type='text' placeholder='title' name='title' />
// 			<input type='button' value='submit' />
// 			</form>
// 			);
// 	}
// }

ReactDOM.render(<App />, document.getElementById('root'));
