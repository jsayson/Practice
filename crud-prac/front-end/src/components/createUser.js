import React, { Component } from 'react';

import Header from './header.js';

import { Redirect } from 'react-router';

class CreateAcc extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { user: data.get('user'), pass: data.get('pass') };
		fetch('/api/create/user', {
			method: 'POST',
			body: JSON.stringify(item),
			headers: { 'Content-Type' : 'application/json' }
		}).then(res=>console.log(res.ok === true ? 'Created Account' : 'failed'));
	}
	render(){
		return (<form>
			<label><strong>Create Account</strong></label><br/>
			<input type='text' placeholder='Username' name='user' /><br/>
			<input type='password' placeholder='Password' name='pass' /><br/>
			<input type='submit' value='Submit' />
			</form>);
		}
	}

export default CreateAcc;
