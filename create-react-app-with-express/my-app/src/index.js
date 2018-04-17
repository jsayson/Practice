import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const mstyles = {
	textDecoration: 'none'
};

function Items(props){
	//console.log(props);
	let items = props.items;
	let movieTitle = items.title;
	let year = items.year;
	let imdbLink = items.imdb;
	let ratings = items.rating;
	console.log(ratings);
	return (<div>
		<p><span><strong>{movieTitle}</strong></span> <span><u>({year})</u></span></p>
		<a href={imdbLink} style={mstyles}>View here</a>
		<div id='rating'>
		<p>Tomato: {ratings.tomato}</p>
		<p>IMDB: {ratings.imdb}</p>
		</div>
		</div>);
}
class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
	}
	componentDidMount(){
		fetch('/api/movies').then(res=>res.json()).then((results)=>{this.setState({items: results})});
	}
	render(){
		//console.log(this.state.items);
		let movies = this.state.items;
		//console.log(movies);
		let moviesMap = movies.map((docs, index)=>{
			return <Items key={docs['_id']} id={index} items={docs} />
		})
		return moviesMap;
	}
}

ReactDOM.render(<App />, document.getElementById('root'));