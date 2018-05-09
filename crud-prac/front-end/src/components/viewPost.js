import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';


class ViewComments extends React.Component{
	constructor(props){
		super(props);
		this.state = { redirect: false };
		this.handleCommentDelete = this.handleCommentDelete.bind(this);
		this.handleEditComment = this.handleEditComment.bind(this);
	}
	handleCommentDelete(e){
		e.preventDefault();
		const commentId = this.props.item._id;
		fetch(`/api/delete/comment/${commentId}`,{
			method: 'DELETE',
		}).then(res => res.ok === true ? console.log('Deleted') : false);
		const item = document.getElementById(commentId);
		console.log(item);
		item.remove();
	}
	handleEditComment(e){
		e.preventDefault();
		const commentId = this.props.item._id;
		const postId = this.props.item.postId;
		const comment = document.getElementById('comment'+commentId).value;
		console.log(comment);
		fetch(`/api/update/comment/${commentId}`, {
			method: 'PUT',
			body: JSON.stringify({ id: commentId, postId: postId, comment: comment }),
			headers: { 'Content-Type': 'application/json' }
		}).then(res => res.ok === true ? console.log('Updated') : false);
	}
	render(){
		return (
			<div id={this.props.item._id} >
			<input type='text' defaultValue={this.props.item.comment} placeholder='comment' id={'comment'+this.props.item._id} />
			<a href='#' onClick={this.handleEditComment}>&#10003;</a><span> </span>
			<a href='#' onClick={this.handleCommentDelete}>&times;</a>
			</div>
			);
	}
}

class Comments extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			comments: [],
			error: false,
			isLoaded: false,
		}
	}
	componentDidMount(){
		const postId = this.props.postId;
		const apiUrl = '/api/post/comments/';
		fetch(apiUrl+postId).then(res=>res.json()).then(res=>this.setState({comments: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error})) 
	}
	render(){
		const { comments, error, isLoaded } = this.state;
		if(error){
			return (<p><strong>Cant find comments</strong></p>);
		}
		else if(!isLoaded){
			return (
				<div>
				<p><strong>Loading Comments</strong></p>
				<div className='load'>
					<div className='bar-1'></div>
					<div className='bar-2'></div>
					<div className='bar-3'></div>
					<div className='bar-4'></div>
					<div className='bar-5'></div>
				</div>
				</div>
				);
		}
		else{
			return comments.map((docs)=><ViewComments key={docs._id} item={docs} />);
		}
	}
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
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		const param = this.props.match.params.id;
		fetch(`/api/post/${param}`).then(res=>res.json()).then(res=>this.setState({item: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error}));
	}
	handleDelete(e){
		e.preventDefault();
		const param = this.props.match.params.id;
		const url = '/api/post/delete/';
		fetch((url+param), {
			method: 'DELETE'
		}).then(res=> res.ok === true ? this.setState({redirect:true}) : false );
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { postId: data.get('postId'), comment: data.get('comment') || 'Sample comment' };
		fetch('/api/submit/comment', {
			method: 'POST',
			body: JSON.stringify(item),
			headers: { 'Content-Type': 'application/json' }
		}).then(res => res.ok === true ? console.log('Commented') : false);
	}
	render(){
		const { item, isLoaded, error, redirect } = this.state;
		const param = this.props.match.params.id;
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
			return(
				<div>
				<div>
				<Link to='/'>Go back</Link> <Link to='#'onClick={this.handleDelete}>Delete</Link>
				<div><strong>{item.title}</strong>
				{ redirect === true ? <Redirect to='/' /> : false }
				</div>
				<p>{item.description}</p>
				</div><hr/>
				<label>Comments:</label><br/>
				<Comments postId={param}/>
				<form onSubmit={this.handleSubmit}>
				<br/><hr/>
				<input type='hidden' name='postId' defaultValue={item._id} />
				<textarea name='comment' placeholder='Write a comment.'></textarea><br/>
				<input type='submit' value='Submit' />
				</form>
				</div>
				);
		}
	}
}

export default ViewPost;
