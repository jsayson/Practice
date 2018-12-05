import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';


//components
import GreetingPage from './components/greetings.js';
import AddGreetings from './components/addGreeting.js';

class MainPage extends Component{
	render(){
		return (
			<Router>
			<div>
			<Route exact path='/' component={GreetingPage} />
			<Route path='/:addgreet' component={AddGreetings} />
			</div>
			</Router>)
	}
}

ReactDOM.render(<MainPage />, document.getElementById('root'));
