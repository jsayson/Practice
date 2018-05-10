import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = { user : this.props.user }
	}
	render(){
		console.log(this.props.user);
		const user = this.state.user;
		return (<Link to='/create/user'>{user === 'undefined' ? 'Register' : this.state.user}</Link>);
	}
}

export default Header;
