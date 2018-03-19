import * as React from 'react';
import { Component } from 'react';

class MyComponent extends Component{
	constructor(props){
		super(props);
		this.handleThisInput = this.handleThisInput.bind(this);
	}
	handleThisInput = (e) => {
		console.log('name: '+this.inputVal.value+'\nchar: '+this.inputVal.value.length);
		this.inputVal.focus();
		this.inputVal.value = ''
		e.preventDefault();
	}
	render(){
		return (<form onSubmit={this.handleThisInput}>
			<input type='text' placeholder='Insert a Name' ref={(input) => this.inputVal = input} />
			<input type='submit' value='submit'/>
			</form>);
	}
}

export default MyComponent;