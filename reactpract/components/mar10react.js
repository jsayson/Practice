import React, { Component } from 'react';

import '../css/mar10css.css'; 

const style = {
	color: 'red',
	fontSize: '36px',
	fontWeight: 'bold'
}

// class Try extends Component{
// 	render(){
// 	console.log(style.color);
// 		return(<div className='test'>The Color of this word is <span style={style}>{style.color}</span></div>);
// 	}
// }
const MyComponent = {
	ComDesign : (props) => {
		console.log(props); 
		return (<div className='test'>The color is <span style={style}>{style.color}</span>. </div>);
	}
}

class Try extends Component{
	render(){
		return <MyComponent.ComDesign style={style}/>
	}
}
export default Try;
