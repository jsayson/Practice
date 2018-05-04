import React, { Component } from 'react';


import '../css/loader.css';


class ViewPost extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: [],
			isLoaded: false,
			error: false
		}
	}
	componentDidMount(){
		const param = this.props.match.params.id;
		fetch(`/api/post/${param}`).then(res=>res.json()).then(res=>this.setState({item: res, isLoaded: true}), (error)=>this.setState({isLoaded: false, error}));
	}
	render(){
		const { item, isLoaded, error } = this.state;
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
				<p><strong>{item.title}</strong></p>
				<p>{item.description}</p>
				</div><hr/>
				<label>Comments</label>
				<form>
				<textarea name='comment'></textarea><br/>
				<input type='submit' value='submit' />
				</form>
				</div>
				);
		}
	}
}

export default ViewPost;