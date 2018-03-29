import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import ScrollableAnchor from 'react-scrollable-anchor';
// import { configureAnchors } from 'react-scrollable-anchor';

import Scrollspy from 'react-scrollspy';

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
			current: 'current',
			holder: []
		}
		this.checker = this.checker.bind(this);
	}
	checker(){
		console.log('hello');
	}
	render(){
		//console.log(this.props);
		return (<nav>
			<ul>
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
