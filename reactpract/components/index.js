import React from 'react';
import ReactDOM from 'react-dom';

/*class Helloworld extends React.Component{
	render(){
		return <h1>Hello World</h1>;;
	}
}

class RenderEm extends React.Component{
	render(){
		return <Helloworld />;
	}
}*/

function name(names){
	let lastname = names.lastName.charAt(0).toUpperCase()+names.lastName.slice(1)
	let firstname = names.firstName.charAt(0).toUpperCase()+names.firstName.slice(1);	
	return lastname+', '+firstname;
}

const names = {
	firstName: 'kira',
	lastName: 'light'
};

const show = 'Hello to you, '+ name(names);
//is the same as this method
/*
const show = (<h1>Hello to you, {name(names)}</h1>);
*/

ReactDOM.render(<h1>{show}</h1>, document.getElementById('root'));