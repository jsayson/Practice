import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';

import '../css/img.css';
import '../css/comment.css';
import '../css/post.css';

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
			credentials: 'include',
		}).then(res => res.ok === true ? console.log('Deleted') : false);
		const item = document.getElementById(commentId);
		item.remove();
	}
	handleEditComment(e){
		e.preventDefault();
		const commentId = this.props.item._id;
		const postId = this.props.item.postId;
		const comment = document.getElementById('comment'+commentId).value;
		fetch(`/api/update/comment/${commentId}`, {
			method: 'PUT',
			body: JSON.stringify({ id: commentId, postId: postId, comment: comment }),
			credentials: 'include',
			headers: { 'Content-Type': 'application/json' }
		}).then(res => res.ok === true ? console.log('Updated') : false);
	}
	render(){
		const imgSrc = 'https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.0-1/p160x160/18486433_343741	199362264_5094166040173734415_n.jpg?_nc_cat=0&amp;oh=82a32d7e7d7c02f542ede985117da7e1&amp;oe=5B992254';
		const imgSampl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7ciORW5z7scT5Hhjf0x-YzRGkfeWLgaZkYoHXikrh2dK6MS7FA';
		const user = this.props.item.user;
		return (
			<div id={this.props.item._id} className='comments'>
			<div className='item1'><img src={imgSampl} alt={ String(user)==='undefined' ? 'User' : user.charAt(0).toUpperCase()+user.slice(1) } /></div> 
			<div className='item2'><strong>{ String(user)==='undefined' ? 'User' : user.charAt(0).toUpperCase()+user.slice(1) } :</strong></div>
			<div className='item3'>
			<input type='text' defaultValue={this.props.item.comment} placeholder='comment' id={'comment'+this.props.item._id} />
			</div>
			<div className='item4'>
			<a href='#' onClick={this.handleEditComment}>&#10003;</a><span> </span>
			<a href='#' onClick={this.handleCommentDelete}>&times;</a>
			</div>
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
		console.log(apiUrl+postId);
		fetch(apiUrl+postId, {credentials: 'include',}).then(res=>res.json()).then(res=>this.setState({comments: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error})) 
	}
	render(){
		const { comments, error, isLoaded } = this.state;
		console.log(comments);
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
		fetch(`/api/post/${param}`, {credentials: 'include'}).then(res=>res.json()).then(res=>this.setState({item: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error}));
	}
	handleDelete(e){
		e.preventDefault();
		const param = this.props.match.params.id;
		const url = '/api/post/delete/';
		fetch((url+param), {
			method: 'DELETE',
			credentials: 'include',
		}).then(res=> res.ok === true ? this.setState({redirect:true}) : false );
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { postId: data.get('postId'), comment: data.get('comment') || 'Sample comment' };
		fetch('/api/submit/comment', {
			method: 'POST',
			body: JSON.stringify(item),
			credentials: 'include',
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
			if(item[1].user==='undefined'){
				return (<div>
								<div className='post'>
								<Link to='/' className='back'>Go back</Link>
								<Link to='#'onClick={this.handleDelete} className='del'>Delete</Link>
								<div className='user'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7ciORW5z7scT5Hhjf0x-YzRGkfeWLgaZkYoHXikrh2dK6MS7FA' alt={item[1].user==='undefined' ? 'User' : item[1].user }/>
								{ redirect === true ? <Redirect to='/' /> : false }
								</div>
								<p className='acc'>{item[1].user==='undefined' ? 'Username' : item[1].user }</p>
								<div className='item'>
								<p><strong>{item[0].title}</strong></p>
								<p>{item[0].description}</p>
								</div>
								</div><hr/>
								<label>Comments:</label><br/>
								<Comments postId={param}/>
								<br/><hr/>
								<p>You must login to comment.</p>
								</div>)
			}
			else{
			return(
				<div>
				<div className='post'>
				<Link to='/' className='back'>Go back</Link>
				<Link to='#'onClick={this.handleDelete} className='del'>Delete</Link>
				<div className='user'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7ciORW5z7scT5Hhjf0x-YzRGkfeWLgaZkYoHXikrh2dK6MS7FA' alt={item[1].user==='undefined' ? 'User' : item[1].user }/>
				{ redirect === true ? <Redirect to='/' /> : false }
				</div>
				<p className='acc'>{item[1].user==='undefined' ? 'Username' : item[1].user }</p>
				<div className='item'>
				<p><strong>{item[0].title}</strong></p>
				<p>{item[0].description}</p>
				</div>
				</div><hr/>
				<label>Comments:</label><br/>
				<Comments postId={param}/>
				<form onSubmit={this.handleSubmit}>
				<br/><hr/>
				<input type='hidden' name='postId' defaultValue={item[0]._id} />
				<textarea name='comment' placeholder='Write a comment.'></textarea><br/>
				<input type='submit' value='Submit' />
				</form>
				</div>
				);
			}
		}
	}
}

export default ViewPost;
