import React, {Component} from 'react';
import ReactDOM from 'react-dom';


function Lists(props){
	console.log(props);
	return <li id={props.res.id}><strong>{props.res.title}</strong> {props.res.body}</li>
}

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			res: []
		}
		//this.getRes = this.getRes.bind(this);	
	}
	componentDidMount(){
		fetch('http://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then((result)=>{this.setState({res: result})});
	}
	render(){
		let res = this.state.res;
		console.log(this.state.res);
		return <ul>{res.map((res, index)=><Lists res={res} key={index} />)}</ul>;
	}	
}

ReactDOM.render(<App />, document.getElementById('root'));
