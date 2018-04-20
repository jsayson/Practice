import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			year: '',
			imdb: '',
			r_imdb: '',
			r_tomato: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
	}
	handleSubmit(event){
		event.preventDefault();
		console.log(this.state);
		const { title, year, imdb, r_imdb, r_tomato } = this.state;
		fetch('/submitted', {
			method: 'POST',
			body: JSON.stringify({
		      'title': title,
		      'year': year,
		      'imdb': imdb,
		      'r_imdb': r_imdb,
		      'r_tomato': r_tomato,
		    }),
		    headers: {"Content-Type": "application/json"}
		  })
	}
	render(){
		const { title, year, imdb, r_imdb, r_tomato } = this.state;
		return (
			<form onSubmit={this.handleSubmit} name='form'>
			<input type='text' name='title' placeholder='Title' value={title} onChange={this.handleChange}/><br/>
			<input type='text' name='year' placeholder='Year' value={year} onChange={this.handleChange}/><br/>
			<input type='text' name='imdb' placeholder='IMDB' value={imdb} onChange={this.handleChange}/><br/>
			<label>Rating<br/>
			<input type='text' name='r_imdb' placeholder='IMDB' value={r_imdb} onChange={this.handleChange}/><br/>
			<input type='text' name='r_tomato' placeholder='Tomato' value={r_tomato} onChange={this.handleChange}/><br/>
			</label>
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
