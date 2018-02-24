import React, { Component } from 'react';

const element = React.createElement(
	'p',
	{
	className: 'greeting'},
	'Hello, World'
);

class SecondClass extends Component{
	render(){
		return element;
	}
}

export default SecondClass;