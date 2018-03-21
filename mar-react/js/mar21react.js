import * as React from 'react';
import { Component } from 'react';

class MyComponent extends Component{
	// handleInput = () => {
	// 	let name=this.myInput.value;
	// 	this.myInput.focus();
	// 	console.log(name);
	// 	name = '';
	// }
	// render(){
	// 	return (<div>
	// 		<input type='text' defaultValue='kira' ref={input=> this.myInput = input} />
	// 		<input type='submit' value='submit'  onClick={this.handleInput} />
	// 		</div>);
	// }
	constructor(props) {
    	super(props);
    	this.handleSubmit = this.handleSubmit.bind(this);
  	}
  	handleSubmit(event) {
    	event.preventDefault();
    	console.log(this.fileInput.files[0]);
	}
  	render() {
    	return (
    	<div>
      	<form onSubmit={this.handleSubmit}>
        	<label>
          	Upload file:
          	<input type="file" ref={input => {this.fileInput = input;}} />
        	</label>
        	<br />
        	<button type="submit">Submit</button>
      	</form>
      	</div>
    	);
  	}
}

export default MyComponent;
