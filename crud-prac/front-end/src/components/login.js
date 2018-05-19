import React, { Component } from 'react';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = { active: false };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { user: data.get('user'), pass: data.get('pass') };
		console.log(item);
	}
	render(){
		return (<form onSubmit={this.handleSubmit}>
			<input type='text' placeholder='Username' name='user' required/><br/>
			<input type='password' placeholder='Password' name='pass' required/><br/>
			<input type='submit' value='Login' />
			</form>);
	}
}

export default Login;