import React from 'react';
import { connect } from 'react-redux';

class ActiveUser extends React.Component{
	render(){
		console.log(this.props.activeUser);
		if(!this.props.activeUser){
		return <h1>Hello World</h1>;
		}
		return <h1>Hello {this.props.activeUser.username}</h1>;
	}
}

function mapStateToProps(state){
	return ({activeUser : state.active})
}

export default connect(mapStateToProps)(ActiveUser);