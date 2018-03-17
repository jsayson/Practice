import * as React from 'react';
import { Component } from 'react';

import '../css/mar14.css';
// type Props = {
// 	greeting: string
// }

// class MComponent extends Component<Props>{
// 	render(){
// 	// console.log(props);
// 		return (<h1>{this.props.greeting}</h1>);
// 	}
// }

class MComponent extends Component{
	constructor(props){
		super(props);
		this.focusThisText = this.focusThisText.bind(this);
	}

	focusThisText(){
		let myInput = document.getElementById('input');
		myInput.classList['add']('effect');
	}

	render(){
		return (<div><input type='text' id='input' onClick={this.focusThisText} className='add' /></div>)
	}
}

class MyComponent extends Component{
	render(){
		return <MComponent greeting='Hello World' />;		
	}
}

export default MyComponent;
