import React, { Component } from 'react';

import { Redirect } from 'react-router';

import { Link } from 'react-router-dom';

import '../css/forms.css';

class SubmitPost extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			redirect: false,
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { title : data.get('title') || 'Empty field', description: data.get('description') || 'Empty field'};
		console.log(JSON.stringify(item));
		fetch('/api/post',{
			method: 'POST',
			body: JSON.stringify(item),
			credentials: 'include',
			headers: {'Content-Type' : 'application/json'}
		}).then(res=>res.ok === true ? this.setState({redirect : true}) : false);
	}
	render(){
		const { redirect } = this.state;
		if(redirect){
			return <Redirect to='/' />;
		}
		else{
			return (
				<div>
				<Link to='/'>Go back</Link>
				<form onSubmit={this.handleSubmit}>
				<input type='text' name='title' placeholder='Title'/><br/>
				<textarea name='description' placeholder='Description'></textarea><br/>
				<input type='submit' value='Post' />
				</form>
				</div>
				);
		}
	}
}

export default SubmitPost;
