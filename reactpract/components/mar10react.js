import React, { Component } from 'react';

import '../css/mar10css.css'; 

const style = {
	color: 'pink',
	fontSize: '36px',
	fontWeight: 'bold'
}

// class Try extends Component{
// 	render(){
// 	console.log(style.color);
// 		return(<div className='test'>The Color of this word is <span style={style}>{style.color}</span></div>);
// 	}
// }\

// const MyComponent = {
// 	ComDesign : (props) => {
// 		console.log(props); 
// 		return (<div className='test'>The color is <span style={style}>{style.color}</span>. </div>);
// 	}
// }

// class Try extends Component{
// 	render(){
// 		return <MyComponent.ComDesign style={style}/>
// 	}
// }
function Solve(props){
	var sum = parseInt(props.sum, 0);
	//console.log(props);
	var ans = null;
	var val = (sum) => {ans = (<div className='test'>The sum is: <span style={props.resColor}>{(sum+=1)}</span></div>); return ans;};
	setInterval(val, 1000);
}
class Try extends Component{
	render(){
		return <Solve sum={1+1+1+1} resColor={style} />
	}
}
export default Try;
