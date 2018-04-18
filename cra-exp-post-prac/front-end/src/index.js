import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(props){
		super(props);
		// this.state = {
		// 	data: {
		// 		title: '',
		// 		year: '',
		// 		imdbLink: '',
		// 		imdb: '',
		// 		tomato: ''
		// 	}
		// }
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		const data = new FormData();
		fetch('/api/submitted', {
			method: 'POST',
			body: data
		})/*.then(res=>res.json()).then(results=>{this.setState({data: data})})*/;
		console.log(data);
		event.preventDefault();
	}

	render(){
		return (<div>
			<form onSubmit={this.handleSubmit}>
			<input type='text' placeholder='Title' name='title' /><br/>
			<input type='text'  placeholder='Year' name='year' /><br/>
			<input type='text'  placeholder='IMDB' name='imdb-link' /><br/>
			<label>Rating<br/>
			<input type='text'  placeholder='IMDB' name='imdb' /><br/>
			<input type='text' placeholder='Tomato' name='tomato' /><br/>
			</label>
			<input type='submit' value='submit' />
			</form>
			</div>);
	}
}

// class App extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			items: []
// 		}
// 	}
// 	componentDidMount(){
// 		fetch('/api/movies').then(res=>res.json()).then(results=>this.setState({items: results}));
// 	}
// 	render(){
// 		console.log(this.state.items);
// 		return (<div>
// 			Hello WOrld</div>)
// 	}
// }

ReactDOM.render(<App />, document.getElementById('root'));