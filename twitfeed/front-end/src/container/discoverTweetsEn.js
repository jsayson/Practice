import React from 'react';
import { Redirect } from 'react-router';

class TweetSearcher extends React.Component{
	handleSubmit(e){
		// e.preventDefault();
		const searcher = document.getElementById('searcher');
		const res = '/popular/';
		const urlTo = res+searcher.value; 
		console.log(urlTo)
		searcher.value = '';
		return <Redirect to={res+urlTo} />;
	}
	render(){
		return (<form onSubmit={this.handleSubmit.bind(this)}>
			<input type='text' placeholder='Popular' name='search' id='searcher'/>
			<input type='submit' value='Search'/>
			</form>)
	}
}

export default TweetSearcher;