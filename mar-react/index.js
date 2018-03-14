import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//css
import './css/mar14.css';

class Show extends React.Component{
	render(){
		return (<h1>Hello World</h1>);
	}
}

ReactDOM.render(<Show />, document.getElementById('root'));
