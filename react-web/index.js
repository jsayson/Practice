import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//components
import Section1 from './Components/section1.js';
import Section2 from './Components/section2.js';
import Section3 from './Components/section3.js';

class Webpage extends React.Component{
	render(){
		return (<div><Section1 /> 
			<Section2 />
			<Section3 /></div>);
	}
}

ReactDOM.render(<Webpage />, document.getElementById('root'));