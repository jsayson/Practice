import React, { Component } from 'react';

function Items(props){
	// console.log(props);
	return (<div id={props.id+1}>
		<p><strong>{props.item.title}</strong> <span><u>({props.item.year})</u></span></p>
		<div id='rating'>
		<p>Imdb: {props.item.rating.imdb}</p>
		<p>Tomato: {props.item.rating.tomato}</p>
		</div>
		<a href={props.item.imdb}>See more</a>
		</div>);
}

class Movies extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			error: false
		}
	}
	componentDidMount(){
		fetch('/api/movies').then(res=>res.json()).then(result=>this.setState({isLoaded: true, items: result}), (error)=>{
			this.setState({isLoaded: true, error});
		});
	}
	render(){
		const { error, items, isLoaded } = this.state;
		// console.log(isLoaded);
		// console.log(this.state.items);
		if(error){
			return <div>Error 404: Content Not Found</div>
		}
		else if(!isLoaded){
			return <div>Loading...</div>
		}
		else{
		// let item = this.state.items;
		let mapping = items.map((res, index)=>{
			return <Items key={res['_id']+index} item={res} id={index}/>
		});
		// console.log(mapping);
		return (<div>{mapping}</div>);
		}
	}
}

export default Movies;