import React, { Component } from 'react';

import '../css/forms.css';

class SubmitPost extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { title : data.get('title') || 'Empty field' ,description: data.get('description') || 'Empty field'};
		console.log(JSON.stringify(item));
		fetch('/api/post',{
			method: 'POST',
			body: JSON.stringify(item),
			headers: {'Content-Type' : 'application/json'}
		}).then(res=>res.json());
	}
	render(){
		return (
			<form onSubmit={this.handleSubmit}>
			<input type='text' name='title' placeholder='Title'/><br/>
			<textarea name='description' placeholder='Description'></textarea><br/>
			<input type='submit' value='Post' />
			</form>
			);
	}
}

export default SubmitPost;
