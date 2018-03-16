import * as React from 'react';
import { Component } from 'react';

function Lists(props){
	console.log(props);
	return (<li onClick={props.onClick}>{props.item}</li>)
}

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			list: ['una', 'pangalawa', 'pangatlo']
		}
	}
	addItem(){
		let item = document.getElementById('item').value;
		document.getElementById('item').value = '';
		let newList = this.state.list.slice();
		newList.push(item === '' ? 0 : item);
		this.setState({list: newList});
	}

	onClick(index){
		let newList = this.state.list.slice();
		newList.splice(index, 1);
		this.setState({list: newList});
	}

	render(){
		let items = [];
		this.state.list.forEach((item, i)=>{
			items.push(<Lists item={item} key={i} onClick={()=>this.onClick(i)}/>);
		});
		return (<div><h1>{this.props.greeting}</h1>
			<input type='text' id='item' placeholder='Enter Item' />
			<input type='submit' value='submit' onClick={()=>this.addItem()} />
			<ul>
			{items}
			</ul>
			</div>);
	}
}

class MyComponent extends Component{
	render(){
		return <App greeting={'Hello World'} />
	}
}

export default MyComponent;
