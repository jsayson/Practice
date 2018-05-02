import React, { Component } from 'react';

class Item extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: this.props.details,
			id: this.props.id
		}
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	handleUpdate(e){
		// console.log(this.props);
		e.preventDefault();
		const id = this.state.id;
		const data = new FormData(e.target);
		console.log(data.get('title'));
		const item = { id: data.get('id'), title: data.get('title') };
		fetch(`/api/edit/{id}`, {
			method: 'PUT',
			body: JSON.stringify(item),
			headers: {'Content-Type': 'application/json'}
		}).then(res=>res.json());
	}
	render(){
		const { _id, title } = this.state.item;
		console.log(_id);
		return (
			<form onSubmit={this.handleUpdate}>
			<input type='hidden' name='id' defaultValue={_id} />
			<input type='text' placeholder='title' defaultValue={title} name='title'/>
			<input type='submit' value='submit' />
			</form>
			)
	}
}
class Edit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: [],
			isLoaded: false,
			error: false,
			id: this.props.match.params.id
		}
	}
	componentDidMount(){
		// const id = this.props.match.params.id;
		// console.log(id)
		const { id } = this.state;
		fetch(`/api/edit/${id}`).then(res=>res.json()).then(result=>this.setState({item: result, isLoaded: true}), (error)=>this.setState({isLoaded: true, error}));
	}
	render(){
		const { item, isLoaded, error } = this.state;
		if(error){
			return <h1>Error: 404</h1>
		}
		else if(!isLoaded){
			return <h1>Loading...</h1>
		}
		else{
			return <Item details={item} id={this.state.id} />
		}
	}
}

export default Edit;