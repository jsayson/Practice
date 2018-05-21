import React, { Component } from 'react';

import { Redirect } from 'react-router';

import { Link } from 'react-router-dom';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = { active: false, message: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { user: data.get('user'), pass: data.get('pass') };
		console.log(item);
		fetch('/api/login',{
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(item),
			headers: { 'Content-Type': 'application/json'}
		}).then(result=>result.json()).then(res=>this.setState({message: res.Message, active: res.Status}));
	}
	render(){
		const { active, message } = this.state;
		console.log(String(active));
		console.log(message);
		if(String(active)==='true'){
			return <Redirect to='/' />;
		}
		else{
			return (<div>
			<Link to='/'>Go back.</Link><br/>
			<form onSubmit={this.handleSubmit}>
			<input type='text' placeholder='Username' name='user' required/><br/>
			<input type='password' placeholder='Password' name='pass' required/><br/>
			<input type='submit' value='Login' />
			</form></div>);
		}
	}
}

export default Login;
