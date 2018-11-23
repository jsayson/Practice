import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function Contents(props){
	const item = props.item;
	var idKey = 0;
	return item.map(res=>{
		console.log(res);
		idKey++;
		return (<div key={idKey}><input type='hidden' value={idKey-1}/><h2># {res.greeting}</h2></div>)
	})
}

class Page extends Component{
	constructor(props){
		super(props);
		this.state = {isLoaded: false , items: [] , error: false}
	}
	componentDidMount(){
		fetch('/greet',{
			method: 'GET',
			credentials: 'include'
		}).then((res)=>res.json()).then((res)=>this.setState({isLoaded: true, items: res}), (error)=>this.setState({isLoaded: false, error}));
	}
	render(){
		const {isLoaded, items, error } = this.state;
		if(!isLoaded){
			return <p>Loading...</p>
		}
		else if(isLoaded){
			return <div><h1>Greetings for today!</h1><Contents item={items} /></div>
		}
		else{
			return <p>Error 200</p>
		}
	}
}

ReactDOM.render(<Page />, document.getElementById('root'));