import React from 'react'
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux'; 

import { createLogger } from 'redux-logger';

import PouchDB from 'pouchdb';

//component
import App from './components/';

//reducers
import allReducers from './reducers/';

import { persistentStore } from 'redux-pouchdb';

const loggerMiddleware = createLogger();

const db = new PouchDB('accounts');

const store = createStore(
	allReducers,
	applyMiddleware(
		thunkMiddleware,
		// loggerMiddleware
		),
	persistentStore(db)
	);

class Web extends React.Component{
	render(){
		return (<App />);
	}
}

ReactDOM.render(<Provider store={store}><Web /></Provider>, document.getElementById('root'));