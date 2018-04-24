import React, { Component } from 'react';

class MovieDesc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: [],
			isLoaded: false,
			error: false
		}
	}
	componentDidMount(){
		// const { match : { params } } = this.props;
		// console.log(match);
		fetch('/api/movies/5add9ba7b6266e3428cc5e78').then(res=>res.json()).then(result=>this.setState({item: result, isLoaded: true})),(error=>this.setState({isLoaded: true, error}));
	}
	render(){
		const {isLoaded, item, error } = this.state;
		console.log(item);
		if(error){
			return <div>Error 404: Content Not Found</div>
		}
		else if(!isLoaded){
			return <div>Loading...</div>
		}
		else{
		return <h1>Hello World</h1>
		}
	}
}

export default MovieDesc;