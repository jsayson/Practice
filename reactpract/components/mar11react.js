import React, { Component } from 'react';
import '../css/mar10css.css';

const style = {
	color: 'red',
	fontSize: '20px',
	fontWeight: 'bold'
}

function GetComponent(props){
	//console.log(props.children.props.children.props.children[1].props.children);
	let number = props.children.props.children.props.children[1].props.children; 
	//console.log(number);
	let items = [];
	let numberSum = 0;
	for(let i=0; i<number; i++){
		//console.log(number[i]);
		numberSum += i;
		if(items[0]==null){
			items.push(i);
		}
		else{
			items.push('+'+i)
		}
	}
	return <div>{items || 0} = {numberSum || 0}</div>;
}

function GetNumber(props){
	let GettingToKnowNum;
	//console.log(props);
	if(props.number % 2 === 0 && typeof(props.number) === 'number'){
		GettingToKnowNum = (<GetComponent><div className='test'><p>The number <span className='highlight'>{props.number}</span> is EVEN number</p>
			<div>This is valid HTML &amp; JSX at the same time.</div>
			</div></GetComponent>);
	}
	else{
		GettingToKnowNum = (<GetComponent><div className='test'><p>The number <span className='highlight'>{props.number}</span> is ODD number</p></div></GetComponent>);
	}
	return GettingToKnowNum;
}

class Answer extends Component{
	render(){
		return <GetNumber number={3} style={style}/>;
	}
}

export default Answer;
