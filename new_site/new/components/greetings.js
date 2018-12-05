import React, { Component } from 'react';

import { Link } from 'react-router-dom';

function Contents(props){
	const item = props.item;
	var idKey = 0;
	return item.map(res=>{
		idKey++;
		return (<div key={idKey}><input type='hidden' value={idKey-1}/><h2># {res.greeting}</h2></div>)
	})
}

class GreetingPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			isLoaded: false,
			items: [],
			error: false
		}
	}
	componentDidMount(){
		fetch('/greetings',{
			method: 'GET',
			credentials: 'include'
		}).then((res)=>res.json()).then((res)=>this.setState({isLoaded: true, items: res}), (error)=>this.setState({isLoaded: false, error}));

	}
	render(){
		const {isLoaded, items } = this.state;
		if(!isLoaded){
			return <p>Loading...</p>
		}
		else if(isLoaded){
			return (<div>
						<h1>Greetings for today!</h1>
						<Contents item={items} />
						<Link to='/addgreet'>Add some greetings here!</Link>
					</div>)
		}
		else{
			return <p>Error</p>
		}
	}
}

export default GreetingPage;
