import React, { Component } from 'react';

import Header from './header.js';

import { Redirect } from 'react-router';

import { Link } from 'react-router-dom';

class CreateAcc extends React.Component{
	constructor(props){
		super(props);
		this.state = { users: [], redirect: false,  user: false};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e){
		e.preventDefault();
		const { users } = this.state;
		const user = document.getElementById('user');
		const checker = document.getElementById('checker');
		if(String(users[0])==='undefined'){
			if(user.value.length > 5){
				checker.innerHTML = 'Username is available.'
				user.style.borderRadius = '2px';
				user.style.border = 'solid 2px green';
				this.setState({user: true});
			}
			else{
				checker.innerHTML = 'Username is too short.'
				user.style.borderRadius = '2px';
				user.style.border = 'solid 2px red';
			}
		}
		for(let i=0;i<users.length;i++){
			if(user.value===users[i].user){
				checker.innerHTML = 'Username already taken.';
				user.style.borderRadius = '2px';
				user.style.border = 'solid 2px red';
				return;
			}
			else if(user.value === ''){
				user.placeholder = 'Required Field';
			}
			else{
				if(user.value.length > 5){
					checker.innerHTML = 'Username is available.'
					user.style.borderRadius = '2px';
					user.style.border = 'solid 2px green';
					this.setState({user: true});
				}
				else{
					checker.innerHTML = 'Username is too short.'
					user.style.borderRadius = '2px';
					user.style.border = 'solid 2px red';
				}
			}
		}
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { user: data.get('user'), pass: data.get('pass') };
		const { user } = this.state;
		if(user===true){
			fetch('/api/create/user', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(item),
				headers: { 'Content-Type' : 'application/json' }
			}).then(res=>res.ok === true ? this.setState({redirect: true}): console.log('Failed'));		
		}
	}
	componentDidMount(){
		fetch('/api/check/user',{
			credentials: 'include'
		}).then(res=>res.json()).then(res=>this.setState({users: res}));
	}
	render(){
		const { redirect, users } = this.state;
		if(redirect){
			return <Redirect to='/' />;
		}
			return (<form onSubmit={this.handleSubmit}>
						<Link to='/'>Go back</Link><br/>
						<label><strong>Create Account</strong></label><br/>
						<p id='checker'></p>
						<input type='text' placeholder='Username' name='user' onChange={this.handleChange} id='user' required/><br/>
						<input type='password' placeholder='Password' name='pass' required/><br/>
						<input type='submit' value='Submit' />
					</form>);
		}
	}

export default CreateAcc;
