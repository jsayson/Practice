import React, { Component } from 'react';

import '../css/loader.css';

class EditPost extends React.Component{
	constructor(props){
		super();
		this.state = {
			item: [],
			isLoaded: false,
			error: false
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		const id = this.props.match.params.id
		fetch(`/api/post/edit/${id}`).then(res=>res.json()).then(res=>this.setState({item: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error}));
	}
	handleSubmit(e){
		e.preventDefault();
		const id = this.props.match.params.id;
		const data = new FormData(e.target);
		const item = { id: data.get('id'), title: data.get('title'), description: data.get('description') };
		fetch(`/api/post/edit/${id}`, {
			method: 'PUT',
			body: JSON.stringify(item),
			headers: {'Content-Type': 'application/json'}
		}).then(res=>console.log(res.statusText==='OK' ? 'Submitted': 'Failed'));
	}
	render(){
		const { item, isLoaded, error } = this.state;
		if(error){
			return <h1>Error: 404</h1>
		}
		else if(!isLoaded){
			return (<div className='load'>
					<div className='bar-1'></div>
					<div className='bar-2'></div>
					<div className='bar-3'></div>
					<div className='bar-4'></div>
					<div className='bar-5'></div>
				</div>);
		}
		else{
			return (
				<form onSubmit={this.handleSubmit}>
				<input type='hidden' name='id' defaultValue={item._id} />
				<input type='text' placeholder='Title' name='title' defaultValue={item.title} /><br/>
				<textarea name='description' defaultValue={item.description}></textarea><br/>
				<input type='submit' value='Submit' />
				</form>
				);
		}
	}
}

export default EditPost;