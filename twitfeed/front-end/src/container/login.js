import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// class Login extends React.Component{
// 	render(){
// 		return (<form>
// 			<input type='text' placeholder='Username' name='user'/><br/>
// 			<input type='password' placeholder='Password' name='pass'/><br/>
// 			<input type='submit' value='Login' />
// 			</form>)
// 	}
// }
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router';

import { fetchRecLogin, fetchReqLogout } from '../actions/login'

import { Field, reduxForm } from 'redux-form';


let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <Field name='email' component='input' type='email' placeholder='email' /><br/>
      <label>Password</label>
      <Field name='password' component='input' type='password' placeholder='password' /><br/>
      <button type='submit'>Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)


class ContactPage extends React.Component {
  submit = values => {
    // print the form values to the console
    // console.log(values)
    this.props.dispatch(fetchRecLogin(values));
  }
  componentWillUpdate(){
    // console.log(this.props.login);
  }
  render() {
    console.log(this.props)
    if(Array.isArray(this.props.login.item)===true || this.props.login.item === undefined){
      return (<div><ContactForm onSubmit={this.submit} /><br/><Link to='/register'>Register Account here</Link></div>)
    }
    else{
      return (<div>{this.props.login.item.user} || <button onClick={()=>this.props.dispatch(fetchReqLogout())}>Logout</button> || <Link to='/trends'>Go to trends</Link> || <Link to='/popular'>Search Popular</Link> || <Link to='/top_users/1'>Most Popular Accounts</Link><hr/></div>);
    }
    // return <h1>Hello World</h1>
  }
}

function mapStateToProps(state){
  return { login: state.login }
};

export default connect(mapStateToProps)(ContactPage);