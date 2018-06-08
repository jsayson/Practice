import React from 'react';

import { Field, reduxForm } from 'redux-form';

import { connect } from 'react-redux';

import { Redirect } from 'react-router'; 

import { fetchRegisterAccount } from '../actions/register';

// import { bindActionCreators } from 'redux';

let RegisterForm = props => {
	const { handleSubmit } = props;
	return (<form onSubmit={handleSubmit}>
		<Field component='input' type='email' placeholder='Email' name='regEmail' /><br/>
		<Field component='input' type='password' placeholder='Password' name='regPassword' /><br/>
		<button type='submit'>Submit</button>
		</form>);
}

RegisterForm = reduxForm({
	form: 'RegForm'
})(RegisterForm);

class RegFormHolder extends React.Component{
	submit = (values) => {
		// alert(values);
		// console.log(values);
		// console.log(values.regMail);
		// alert(JSON.stringify(values));
		this.props.dispatch(fetchRegisterAccount(values));
		// console.log(this.props)
		// console.log(this.props.register.greeting==='success' ? alert('success') : alert('failed'));
	}
	componentDidUpdate(){
		console.log(this.props.register);
		if(this.props.register.item.greeting!==undefined){
			// alert(this.props.register.item.greeting);
			// return <Redirect to='/login' />;
		console.log(this.props.register.item.greeting);
		}
		else{
			console.log('Loading');
		}
	}
	render(){
		console.log(this.props.item);
		if(Array.isArray(this.props.login.item)===true || this.props.login.item === undefined){
		if(this.props.register.item.greeting!==undefined){
			alert(this.props.register.item.greeting);
			return <Redirect to='/' />;
		}
		else{
			console.log('Loading');
		}
		return <RegisterForm onSubmit={this.submit} />;
		}
		else{
			return <Redirect to='/' />
		}
	}
}

function mapStateToProps(state){
	return { register: state.register, login: state.login }
}

export default connect(mapStateToProps)(RegFormHolder);