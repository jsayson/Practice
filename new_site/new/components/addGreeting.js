import React, { Component } from 'react';


class AddGreetings extends Component{
	constructor(props){
		super(props);
		this.state = { items : [] };
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		const data = new FormData(e.target);
		const item = { greeting: data.get('greeting') }
		fetch('/submitgreeting', {
			method: 'POST',
			body: JSON.stringify(item),
			credentials: 'include',
			header: { 'Content-Type': 'application/json'}
		}).then(res => res.ok === true ? console.log('nice!'): console.log('not so nice!'));
	}
	render(){
		return(
		<div>
		<form onSubmit={this.handleSubmit} >
		<input type='text' name='greeting' defaultValue='Magandang Umaga po!' /><br/>
		<input type='submit' value='submit' />
		</form>
		</div>);
	}
}

export default AddGreetings;