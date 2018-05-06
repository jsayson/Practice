import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';

import '../css/loader.css';

function Comments(props){
	console.log(props);
	const commu = props.com;
	return (<div><br/>User: <span>{commu.comment}</span></div>);
}

class ViewPost extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: [],
			isLoaded: false,
			error: false,
			redirect: false
		};
		this.handleDelete = this.handleDelete.bind(this);
	}
	componentDidMount(){
		const param = this.props.match.params.id;
		fetch(`/api/post/${param}`).then(res=>res.json()).then(res=>this.setState({item: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error}));
	}
	handleDelete(e){
		e.preventDefault();
		console.log('deleted');
		this.setState({redirect: true});
	}
	render(){
		const { item, isLoaded, error, redirect } = this.state;
		if(error){
			return <h1>Error 404</h1>			
		}
		else if(!isLoaded){
			return (
				<div className='load'>
					<div className='bar-1'></div>
					<div className='bar-2'></div>
					<div className='bar-3'></div>
					<div className='bar-4'></div>
					<div className='bar-5'></div>
				</div>
				);
		}
		else{
			const comment = [
			{id: 1, comment : 'What a nice song' },
			{id: 2, comment : 'Damn this song'}
			];
			return(
				<div>
				<div>
				<Link to='/'>Go back</Link> <Link to='#'onClick={this.handleDelete}>Delete</Link>
				<div><strong>{item.title}</strong>
				{ redirect === true ? <Redirect to='/' /> : false }
				</div>
				<p>{item.description}</p>
				</div><hr/>
				<form>
				<label>Comments:</label><br/>
				{ comment.map((docs, index)=> docs === 'undefined' ? 'Write a comment' : <Comments key={index} com={docs} />) }
				<br/><hr/>
				<textarea name='comment' placeholder='Write a comment.'></textarea><br/>
				<input type='submit' value='Submit' />
				</form>
				</div>
				);
		}
	}
}

export default ViewPost;
