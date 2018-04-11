import React, { Component } from 'react';


function Lists(props){
	console.log(props);
	return (<div id={props.res.id}><div><img src='###' alt={props.res.name} height='100px' width='100px' /><h1>{props.res.name}</h1></div></div>);
}

class Users extends Component{
	constructor(props){
		super(props);
		this.state = {
			items: []
		}
	}
	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(result=>this.setState({ items: result}));
	}	
	render(){
		//console.log(this.state.items);
		let info = this.state.items;
		//console.log(info);		
		let x = 0;
		return info.map((res, index)=><Lists res={res} key={info.id}/>);
	}
}

export default Users;
