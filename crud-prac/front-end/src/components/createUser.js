import React, { Component } from 'react';

import Header from './header.js';

import { Redirect } from 'react-router';

class CreateAcc extends React.Component{
	constructor(props){
		super(props);
		this.state = { redirect: false };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { user: data.get('user'), pass: data.get('pass') };
		fetch('/api/create/user', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(item),
			headers: { 'Content-Type' : 'application/json' }
		}).then(res=>res.ok === true ? this.setState({redirect: true}): console.log('Failed'));
	}
	render(){
		const {redirect} = this.state;
			return (<form onSubmit={this.handleSubmit}>
						<label><strong>Create Account</strong></label><br/>
						<input type='text' placeholder='Username' name='user' /><br/>
						<input type='password' placeholder='Password' name='pass' /><br/>
						<input type='submit' value='Submit' />
					</form>);
		}
	}

export default CreateAcc;
