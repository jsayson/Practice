import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ScrollableAnchor from 'react-scrollable-anchor';
// import { configureAnchors } from 'react-scrollable-anchor';

//import Scrollspy from 'react-scrollspy';

//CSS
import './Css/index.css';

//components
import Section1 from './Components/section1.js';
import Section2 from './Components/section2.js';
import Section3 from './Components/section3.js';


const items = ['section1', 'section2', 'section3'];

class Sspy extends React.Component{
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

class Webpage extends React.Component{
	render(){
		return (<div>
					<Sspy items={items} currentClassName="is-current"/>
					<Section1 /> 
					<Section2 />
					<Section3 />
				</div>);
	}
}

ReactDOM.render(<Webpage />, document.getElementById('root'));
