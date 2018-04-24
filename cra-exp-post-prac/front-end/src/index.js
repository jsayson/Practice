import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import Search from './Components/search.js';
import Movies from './Components/movies.js';
import MovieDesc from './Components/movie_desc.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const dataItems = {
      title: data.get('title'),
      year: data.get('year'),
      imdbLink: data.get('imdbLink'),
      r_tomato: data.get('r_tomato'),
      r_imdb: data.get('r_imdb')
    }
    console.log(dataItems);
    fetch('/api/submitted', {
      method: 'post',
      body: JSON.stringify(dataItems),
      headers: {'Content-Type': 'application/json'}
    });
    let inputs = document.querySelectorAll('#inputs');
    console.log(inputs);
    for(let val of inputs){
      val.value = '';
    }
    inputs[0].focus();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit} onLoad={this.handleSubmit}>
      <input type='search' name='title' placeholder='Title' id='inputs' required/><br/>
      <input type='text' name='year' placeholder='Year' id='inputs' required/><br/>
      <input type='text' name='imdbLink' placeholder='Imdb Link' id='inputs' required/><br/>
      <label>Rating<br />
      <input type='text' name='r_tomato' placeholder='Tomato' id='inputs' required/><br/>
      <input type='text' name='r_imdb' placeholder='Imdb' id='inputs' required/><br/>
      </label>
      <input type='submit' value='submit' />
      </form>
      );
  }
}

class View extends React.Component{
  render(){
  return (<Router>
    <div>
    <Route exact path='/' component={App} />
    <Route exact path='/movies' component={Movies} />
    <Route exact path='/movies/:id' component={MovieDesc} />
    </div>
    </Router>);
  }
}

ReactDOM.render(<View />, document.getElementById('root'));
