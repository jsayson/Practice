import React, { Component } from 'react';
import '../css/mar10css.css';

function GetComponent(props){
	return <div>{props.children}</div>;
}

function GetNumber(props){
	let GettingToKnowNum;
	//console.log(props);
	if(props.number % 2 === 0){
		GettingToKnowNum = (<GetComponent><div className='test'><p>The number <span className='highlight'>{props.number}</span> is EVEN number</p></div></GetComponent>);
	}
	else{
		GettingToKnowNum = (<GetComponent><div className='test'><p>The number <span className='highlight'>{props.number}</span> is ODD number</p></div></GetComponent>);
	}
	return GettingToKnowNum;
}

class Answer extends Component{
	render(){
		return <GetNumber number={4}/>;
	}
}

export default Answer;