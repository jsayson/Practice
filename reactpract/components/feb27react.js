import React, { Component } from 'react';

//State and lifecycle 
function ShowTime(props){
	//console.log(props);
	return <p>{props.date.toLocaleTimeString()}</p>;
}

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {date: new Date()};
		console.log(this.state);
	}
	tick(){
		this.setState({
			date: new Date()
		});
	}

	componentDidMount(){
		this.timerID = setInterval(()=>this.tick(), 1000);
	}

	componentWillUnmount(){
		clearInterval(this.timerID);
	}

	render(){
		return (<ShowTime date={this.state.date} />);
	}
}

// function Tick(){
// 	return <Clock />;
// }
// function Run(){
// 	return (<div>	
// 			<Clock />
// 			<Clock />
// 			<Clock />
// 			</div>
// 			);
// }

class Run extends Component{
	render(){
		return (
			<div>
			<div><p>First</p><Clock /></div>
			<Clock />
			<Clock />
			</div>
			);
	}
}

//setInterval(Tick, 1000);

export default Run;
