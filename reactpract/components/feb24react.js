import React, { Component } from 'react'; 

const trial = {
	firstName: 'Kira',
	lastName: 'Light'
};

const obj = React.createElement(
	'h1',
	{className : 'PassThis'},
	trial.lastName+', '+trial.firstName
);

class ThirdClass extends Component{
	render(){
		return obj;
	}
}

export default ThirdClass;