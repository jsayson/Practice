import React, { Component } from 'react';

const style = {
	color: 'red',
	fontSize: '36px',
	fontWeight: 'bold'
}

class Try extends Component{
	render(){
	console.log(style.color);
		return(<div className='check'>The Color of this word is <span style={style}>Color</span></div>);
	}
}

export default Try;
