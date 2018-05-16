import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../css/header.css';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user: '',
			details: true
		}
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount(){
		fetch('/acc', {
			method: 'GET',
			credentials: 'include'
		}).then(res=>res.json()).then(res=>this.setState({user: res.user, details: !this.state.details}));
	}
	handleClick(e){
		e.preventDefault;
		console.log('hi');
		const proDetails = document.getElementById('proDetails');
		const { details } = this.state;
		console.log('handleClick'+ details);
		if(details === true){
			proDetails.className = 'proDetails';
		}
		else{
			proDetails.className = 'show';
		}
		this.setState({details: !details});

	}
	render(){
		console.log(this.state.details);
		const { user } = this.state;
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

export default Header;
