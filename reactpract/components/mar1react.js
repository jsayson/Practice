import React, { Component } from 'react';

// function UserGreeting() {
//   	return <h1>Welcome back!</h1>;
// }

// function GuestGreeting() {
//  	return <h1>Please sign up.</h1>;
// }

// function Logout(props){
// 	console.log(props)
// 	return (<button onClick={props.onClick}>Logout</button>);
// }

// function Greeting(props){
// 	console.log(props);
// 	const ans = props.ans;
//   	if (ans) {
//     	return <UserGreeting />;
//   	}
//   		return <GuestGreeting />;
// }

// function Login(props){
//  	console.log(props);
//  	return (<button onClick={props.onClick}>Login</button>);
// }

// class Condition extends Component{
// 	constructor(props){
// 		console.log(props);
// 		super(props);
// 		this.state = {
// 			ans: false 
// 		}
//		this.handleLoginClick = this.handleLoginClick.bind(this);
// 		this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 	}

// 	handleLoginClick(){
// 		this.setState({ans: true});
// 	}

// 	handleLogoutClick(){
// 		this.setState({ans: false});
// 	}

// 	render(){
// 		const ans = this.state.ans;

// 		let button = null;

// 		if(ans){
// 			button = (<Logout onClick={this.handleLogoutClick} />);
// 		}
// 		else{
// 			button = (<Login onClick={this.handleLoginClick} /> );
// 		}

// 		return (<div><Greeting ans={ans} />{button}</div>
//     );
// 	}
// }

// class Answer extends Component{
// 	render(){
// 		return (<div><Condition /></div>);
// 	}
// }
class Condition extends Component{
	constructor(props){
		super(props);
		this.state = {
			clicks : 0
		}
		this.increaseOne = this.increaseOne.bind(this);
	}

	increaseOne(){
		this.setState({clicks: this.state.clicks+1});
	}

	render(){ 
		return (<div>
			<h1>Say `Hello World` {this.state.clicks} times: {this.state.clicks%2===0 ? 'Even' || 0: 'Odd'}</h1>
			<button onClick={this.increaseOne}>{this.state.clicks>4 ? 'Add More...' : 'Add One'}</button>
			</div>);
	}
}

class Answer extends Component{
	render(){
		return <Condition />;
	}
}

export default Answer;
