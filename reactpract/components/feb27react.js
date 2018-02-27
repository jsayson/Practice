import React, { Component } from 'react';

//State and lifecycle 

class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {date: new Date()};
	}

	tick(){
		this.setState({
			date: new Date()
		});
	}
	//componentDidMount is a reference from reactDOM;
	componentDidMount(){
		this.timerID = setInterval(()=>this.tick(), 1000);
	}
	//componentWillUnmout is a reference from ReactDOM;
	componentWillUnmount(){
		clearInterval(this.timerID);
	}

	render(){
		return (
			<div>
				<h1>It is {this.state.date.toLocaleTimeString()}</h1>
			</div>
			);
	}
}

// function Tick(){
// 	return <Clock />;
// }


class Run extends Component{
	render(){
		return <Clock />;
	}
}

//setInterval(Tick, 1000);

export default Run;
