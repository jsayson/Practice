import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			user: ''
		}
	}
	componentDidMount(){
		fetch('/acc', {
			method: 'GET',
			credentials: 'include'
		}).then(res=>res.json()).then(res=>this.setState({user: res.user}));
	}
	render(){
		const { user } = this.state;
		console.log(user);
		const link = (<Link to='/create/user'>Create account here.</Link>); 
		return (<div>{String(user) === 'undefined' ? link : user}</div>);
	}
}

export default Header;
