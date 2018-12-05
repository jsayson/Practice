import React, { Component } from 'react';

function GetMagic(props){
	console.log(props);
	return <p>{props.item.greeting}</p>
}


class Magic extends Component{
	render(){
		let item = this.props.items;
		let x = 0;
		if(item.length > 0){
			console.log(item.length);
			return item.map((res)=><GetMagic item={res} key={x++}/>
			);
		}
		else{
			return <span></span>
		}
	}
}


class SubmitGreeting extends Component{many
	constructor(props){
		super(props);
		this.state = { items : [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentWillReceiveProps(props){
		this.setState({items: props});
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { greeting: data.get('greeting') }
		fetch('/submitgreeting', {
			method: 'POST',
			body: JSON.stringify(item),
			credentials: 'include',
			headers: { 'Content-Type': 'application/json'}
		}).then(res=>res.json()).then(res=>this.componentWillReceiveProps(res));
		e.target.value = ' ';
	}
	render(){
		const { items } = this.state;
		return(
		<div>
		<Magic items = {items}/>
		<form onSubmit={this.handleSubmit} >
		<input type='text' name='greeting' defaultValue='Magandang Umaga po!' /><br/>
		<input type='submit' value='submit' />
		</form>
		</div>);
	}
}

class AddGreetings extends Component{
	render(){
		return (<SubmitGreeting />);
	}
}



export default AddGreetings;
