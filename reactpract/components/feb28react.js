import React, { Component } from 'react';

//Handling events

// function Clicked(e){
// 	e.preventDefault();
// 	console.log('this Button was clicked.');
// }

// class Clicker extends Component{
// 	render(){
// 		return <button onClick={/*console.log('hello')*/Clicked}>Fire</button>;
// 	}
// }

// class Toggle extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			isToggleOn: true
// 		};
// 		this.handleClick = this.handleClick.bind(this);
// 	}
// 	handleClick(){
// 		console.log(this.state);
// 		this.setState((prevState) => ({
// 			isToggleOn: !prevState.isToggleOn
// 		}));
// 	}
// 	render(){
// 		return (<div><button onClick={this.handleClick}>
// 		{this.state.isToggleOn ? 'On' : 'Off'}
// 		</button></div>);
// 	}
// }
class StartWar extends Component{
	constructor(props){
		super(props);
		this.state = {
			firing: false,
			callGen: true
		}
		console.log(props)
	}
	calledGen(){
		this.setState(this.firing === true ? 'Call' : 'Called');
	}
	render(){
		return <h1>{this.calledGen}</h1>;
	}
}

class Toggle extends Component{
	constructor(props){
		super(props);
		this.state = {
			firing : false
		}
		//binding is necessary to make this work in our callback	
		this.firingClick = this.firingClick.bind(this);
	}
	firingClick(){
		this.setState(gunFiring => ({
			firing: !gunFiring.firing
		}));
	}
	render(){
		return (<div><button className='firing' onClick={this.firingClick}>
			{this.state.firing ? 'Ceasefire' : 'Firing'}
			</button>
			<StartWar fire={this.state.firing} /></div>);
	}
}

export default Toggle;
