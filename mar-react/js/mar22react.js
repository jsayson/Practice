import * as React from 'react';
// import { Component } from 'react';

// class MyComponent extends Component{
// 	constructor(props) {
//     	super(props);
//     	this.state = {count: 1};
//   	}

//   	shouldComponentUpdate(nextProps, nextState) {
//     	if (this.props.color !== nextProps.color) {
//       		return true;
//     	}
//     	if (this.state.count !== nextState.count) {
//      	 	return true;
//     	}
//     	return false;
//   	}

// 	render() {
// 	    return (
// 	      <button
// 	        color={this.props.color}
// 	        onClick={() => this.setState(state => ({count: state.count + 1}))}>
// 	        Count: {this.state.count}
// 	      </button>
// 	    );
// 	}
// }

//without es6

const createReactClass = require('create-react-class');
const MComponent = createReactClass({
	render: function(){
		console.log(this.props);
		return <h1>{this.props.greeting}</h1>;
	}
});

MComponent.defaultProps = {
	greeting: 'Hello Guests'
}

// const greeting = {
// 	greet: 'Hello User'
// }

const MyComponent = createReactClass({
	render: function(){
		return <MComponent />;
	}
});
export default MyComponent;
