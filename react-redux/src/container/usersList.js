import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import action file
import { selectUser } from '../actions/selectUser.js';

class UsersList extends React.Component{
	controlUsers(){
		return this.props.users.map((user)=>{
			return <li key={user.id} id={user.id} onClick={()=> this.props.selectUser(user)}>{user.username}</li>
		})
	}
	render(){
		return (<ul>{this.controlUsers()}</ul>);
	}
}

function mapStateToProps(state){
	return ({
		users: state.users
	})
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ selectUser : selectUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);