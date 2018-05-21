import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../css/header.css';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: null,
			user: '',
			details: true,
			isLoaded: false,
			error: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){
		fetch('/acc', {
			method: 'GET',
			credentials: 'include'
		}).then(res=>res.json()).then(res=>this.setState({ id: res.id, user: res.user, isLoaded: true, details: !this.state.details}), error=>this.setState({isLoaded: false, error}));
	}
	handleClick(e){
		e.preventDefault;
		const proDetails = document.getElementById('proDetails');
		const { details } = this.state;
		if(details === true){
			proDetails.className = 'proDetails';
		}
		else{
			proDetails.className = 'show';
		}
		this.setState({details: !details});

	}
	render(){
		const { id, user, isLoaded, error } = this.state;
		console.log(id);
		if(error){
			return <p><strong>Please reload the page.</strong></p>;
		}
		else if(!isLoaded){
			return <h1>Loading...</h1>;
		}
		else{
			console.log('error: '+error+', isLoaded: '+isLoaded);
			if(String(user)==='undefined'){
				return (<Link to='/create/user'>Create account here.</Link>);
			}
			else{
				return (<div className='header'>Hello, {user}
					<ul className='details' id='details'>
					<li><button onClick={this.handleClick}>&equiv;</button></li>
					<div className='proDetails' id='proDetails'>
					<li><Link to='#'>Profile</Link></li>
					<li><Link to='#'>Logout</Link></li>
					</div>
					</ul>
					</div>);
			}
		}
	}
}

export default Header;
