import React, { Component } from 'react';

class Edit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: [],
			isLoaded: false,
			error: false,
			id: this.props.match.params.id
		}
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	handleUpdate(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = {
			id: data.get('id'),
			title: data.get('title'),
			r_imdb: data.get('r_imdb'),
			r_tomato: data.get('r_tomato')
		};
		const { id } = this.state;
		fetch(`/api/edit/${id}`, {
			method: 'PUT',
			body: JSON.stringify(item),
			headers: { 'Content-Type': 'application/json'}
		}).then(res=>console.log(res));
	}
	componentDidMount(){
		// const id = this.props.match.params.id;
		// console.log(id)
		const { id } = this.state;
		fetch(`/api/edit/${id}`).then(res=>res.json()).then(result=>this.setState({item: result, isLoaded: true}), (error)=>this.setState({isLoaded: true, error}));
	}
	render(){
		const { item, isLoaded, error } = this.state;
		// console.log(item);
		if(error){
			return <h1>Error: 404</h1>
		}
		else if(!isLoaded){
			return <h1>Loading...</h1>
		}
		else{
			return (
			<form onSubmit={this.handleUpdate}>
			<input type='hidden' defaultValue={item._id} name='id' />
			<label>Title:  
			<input type='text' defaultValue={item.title} name='title'/>
			</label><br/>
			<label>Rating: <br/>
			<label>Imdb:
			<input type='text' defaultValue={item.rating.imdb} name='r_imdb'/>
			</label><br/>
			<label>Tomato
			<input type='text' defaultValue={item.rating.tomato} name='r_tomato' />
			</label>
			</label><br/>
			<input type='submit' value='Submit' />
			</form>);
		}
	}
}

export default Edit;
