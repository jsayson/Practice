import React, { Component } from 'react';

const Color = {
	myColor: (props) => {
		return (<div>This is the Color: <span style=color:{props.color}>{props.color}</div>);
	}
}

class ReturnColor extends Component{
	render(){
		return <Color.myColor color='red' />;
	}
}

export default ReturnColor;