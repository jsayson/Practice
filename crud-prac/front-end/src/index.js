import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { CookiesProvider } from 'react-cookie';

import ViewPost from './components/viewPost.js';
import SubmitPost from './components/submitPost.js';
import EditPost from './components/editPost.js';
import createAcc from './components/createUser.js';
import Header from './components/header.js';
import Login from './components/login.js';

import './css/loader.css';
import './css/hide.css';
import './css/img.css';
import './css/body.css';


function Items(props){
	const item = props.post;
	const postUrl = '/post/';
	if(item.description.length > 20){
		return (<div id={item._id}>
			<p><strong>{item.title}</strong></p>
			<div>{item.description.charAt(0)+item.description.slice(1, 10) } <a href="#">see more..</a></div>
			<Link to={postUrl+item._id}>View Post</Link>
			<hr/></div>);
	}
	else{
		return (<div id={item._id}>
			<p><strong>{item.title}</strong></p>
			<p>{item.description}</p>
			<Link to={postUrl+item._id}>View Post</Link>
			<hr/></div>);
	}
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
		fetch('/api/posts',{
			method: 'GET',
			credentials: 'include'
		}).then(res=>res.json()).then(res=>this.setState({items: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error}));
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
			return (<div>
				<Link to='/login'>Already have an account?</Link><br/>
				<Link to='/submit'>Wanna write something?</Link><br/>
				{ items.map(res=><Items post={res} key={res._id} />) } </div>);
		}
	}
}

class App extends React.Component{
	render(){
		return (
			<CookiesProvider>
			<Router>
			<div className='app'>
			<Header />
			<Route exact path='/' component={Posts}/>
			<Route exact path='/submit' component={SubmitPost} />
			<Route exact path='/post/:id' component={ViewPost} />
			<Route exact path='/post/edit/:id' component={EditPost} />
			<Route exact path='/create/user' component={createAcc} />
			<Route exact path='/login' component={Login} />
			</div>
			</Router>
			</CookiesProvider>);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
