import React, { Component } from 'react';

const items = ['section1', 'section2', 'section3'];

class Sspy extends Component{
	constructor(props){
		super(props);
		this.state = {
			handler: true
			}
		this.handleList = this.handleList.bind(this);
		}
	handleList(e){
		this.setState({
			handler: !this.state.handler
		});
		e.preventDefault();
		}
	render(){
		//console.log(this.props);
		return (<nav>
			<div id='head'>
			<button onClick={this.handleList}><span className='fa fa-bars'></span></button>
			</div>
			<ul className={this.state.handler===true ? 'hide' : 'show'}>
			<li><a href={"#"+this.props.items[0]} onClick={this.checker}>About</a></li>
			<li><a href={"#"+this.props.items[1]} onClick={this.checker}>Projects</a></li>
			<li><a href={"#"+this.props.items[2]} onClick={this.checker}>Contacts</a></li>
			</ul>
			</nav>)
	}
}

class Header extends Component{
	render(){
		return (<Sspy items={items} currentClassName="is-current"/>);
	}
}

export default Header;
