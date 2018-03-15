import React, { Component } from 'react';
// import * as React from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

//css
import './css/mar14.css';

//js
import Flowify from './js/mar14react.js';
import DefProp from './js/mar15react.js';

// class TestProps extends React.Component{
// 	static propTypes = {
// 		num: PropTypes.number.isRequired
// 	}
// 	render(){
// 		if(typeof (this.props.num) === 'number'){
// 		return (<h1>{this.props.num}</h1>);
// 		}
// 		return (<h1>Not a valid input</h1>);
// 	}
// }


class Webpage extends React.Component{
	render(){
		return (<DefProp />);
	}
}

ReactDOM.render(<Webpage />, document.getElementById('root'));
