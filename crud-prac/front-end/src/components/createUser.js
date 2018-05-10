import React, { Component } from 'react';

import Header from './header.js';

import { Redirect } from 'react-router';

class CreateAcc extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user: '',
			redirect: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = {
			user: data.get('user') || 'test',
			pass: data.get('pass') || 'test'
		};
		fetch('/api/create/user',{
			method: 'POST',
			body: JSON.stringify(item),
			headers: { 'Content-Type' : 'application/json' }
		}).then(res => res.ok === true ? console.log('Submitted') : false).then(res=>this.setState({user: item.user, redirect: true}));
	}
	render(){
		const { redirect, user } = this.state;
			if(redirect){
				return(<div>
				<Header user={user} />
				<Redirect to='/' />
				</div>)
			}
			else{
				return (
					<div>
					<form onSubmit={this.handleSubmit}>
					<label><strong>Create Account</strong></label><br/>
					<input type='text' name='user' placeholder='Username' /><br/>
					<input type='password' name='pass' placeholder='Password'/><br/>
					<input type='submit' value='Submit' />
					</form>
					</div>);
			}
	}
}

export default CreateAcc;