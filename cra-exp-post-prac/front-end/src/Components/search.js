import React, { Component } from 'react';

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item : '',
			items : []
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		e.preventDefault();
		this.setState({item: document.getElementById('search').value});
		fetch('/api/search',{
			method: 'POST',
			body: JSON.stringify({item: this.state.item}),
			headers: {'Content-Type': 'application/json'}
		});
	}
	componentDidMount(){
		fetch('/api/search/results').then(res=>res.json()).then(results=>this.setState({item: results}))
	}
	render(){
		console.log(this.state.items);
		return (<div><form onSubmit={this.componentDidMount}>
			<input type='text' name='search' placeholder='search' onChange={this.handleChange} id='search'/>
			<input type='button' value='submit' />
			</form>
			<hr />
			</div>)
	}
}

export default Search;