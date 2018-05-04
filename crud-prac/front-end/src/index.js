import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ViewPost from './components/viewPost.js';

import './css/loader.css';

function Items(props){
	console.log(props);
	const item = props.post;
	return (<div id={item._id}><p><strong>{item.title}</strong></p><p>{item.description}</p></div>)
}

class Posts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
			error: false
		}
	}
	componentDidMount(){
		fetch('/api/posts').then(res=>res.json()).then(res=>this.setState({items: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error}));
	}
	render(){
		const { items, isLoaded, error } = this.state; 
		if(error){
			return <h1>Error: 404</h1>
		}
		else if(!isLoaded){
			return (<div className='load'>
					<div className='bar-1'></div>
					<div className='bar-2'></div>
					<div className='bar-3'></div>
					<div className='bar-4'></div>
					<div className='bar-5'></div>
				</div>);
		}
		else{
			return items.map(res=><Items post={res} key={res._id} />)
		}
	}
}

class App extends React.Component{
	render(){
		return (
			<Router>
			<div>
			<Route exact path='/' component={Posts}/>
			<Route exact path='/post/:id' component={ViewPost} />
			</div>
			</Router>);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
