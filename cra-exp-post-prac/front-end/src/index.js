import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
      method: 'POST',
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
      <input type='text' name='title' placeholder='Title' id='inputs'/><br/>
      <input type='text' name='year' placeholder='Year' id='inputs'/><br/>
      <input type='text' name='imdbLink' placeholder='Imdb Link' id='inputs'/><br/>
      <label>Rating<br />
      <input type='text' name='r_tomato' placeholder='Tomato' id='inputs'/><br/>
      <input type='text' name='r_imdb' placeholder='Imdb' id='inputs'/><br/>
      </label>
      <input type='submit' value='submit' />
      </form>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
